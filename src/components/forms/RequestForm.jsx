import { useState } from "react";
//import { useDispatch } from 'react-redux';

import {
  Modal,
  ModalOverlay,
  ZeForm,
  BtnClose,
  FormInputBasic,
  FormInputSelect,
  FormInputTextArea,
  FormLabel,
} from "../../styles/formStyles.js";

import ButtonBrand from "../buttons/ButtonBrand.jsx";
import ButtonUpload from "../buttons/ButtonUpload.jsx";

// eslint-disable-next-line react/prop-types
export default function RequestForm({ isModalOpen, closeModal }) {
  const [requestType, setRequestType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [comment, setComment] = useState("");

  const [price, setPrice] = useState("");
  const [fromDateTraining, setFromDateTraining] = useState("");
  const [toDateTraining, setToDateTraining] = useState("");
  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingURL, setTrainingURL] = useState("");

  //const dispatch = useDispatch();

  const handleFileSelect = (file) => {
    // This currently only saves the filename
    console.log("Selected file:", file.name);
    //dispatch(AddCompanyLogo(file.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    let userId = "1";
    const formContent = {
      userId,
      requestType,
      fromDate,
      toDate,
      comment,
      price,
      fromDateTraining,
      toDateTraining,
      trainingTitle,
      trainingURL,
    };
    console.log(JSON.stringify(formContent));
    //dispatch()
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <>
      <ModalOverlay>
        <Modal>
          <div
            style={{
              display: "flex",
              marginBottom: "6px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Request Form</h2>
            <BtnClose
              src="/close-cross.png"
              alt="Close Button"
              onClick={closeModal}
              width="18px"
              height="18px"
            />
          </div>
          <ZeForm action="submit" onSubmit={handleSubmit}>
            <div>
              <FormLabel htmlFor="inputRequestType">Request Type</FormLabel>
              <FormInputSelect
                id="inputRequestType"
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
              >
                <option value="" disabled>
                  Select a request type
                </option>
                <option value="Vacation">Vacation</option>
                <option value="Absence">Absence</option>
                <option value="Training">Training</option>
              </FormInputSelect>
            </div>

            {(requestType === "Vacation" || requestType === "Absence") && (
              <div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <div>
                    <FormLabel htmlFor="inputFromDate">From</FormLabel>
                    <FormInputBasic
                      id="inputFromDate"
                      type="datetime-local"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <FormLabel htmlFor="inputToDate">To</FormLabel>
                    <FormInputBasic
                      id="inputToDate"
                      type="datetime-local"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {requestType === "Training" && (
              <div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <div>
                    <FormLabel htmlFor="inputFromDateTraining">From</FormLabel>
                    <FormInputBasic
                      id="inputFromDateTraining"
                      type="date"
                      value={fromDateTraining}
                      onChange={(e) => setFromDateTraining(e.target.value)}
                    />
                  </div>
                  <div>
                    <FormLabel htmlFor="inputToDateTraining">To</FormLabel>
                    <FormInputBasic
                      id="inputToDateTraining"
                      type="date"
                      value={toDateTraining}
                      onChange={(e) => setToDateTraining(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <FormLabel htmlFor="inputTrainingTitle">
                    Training Title
                  </FormLabel>
                  <FormInputBasic
                    id="inputTrainingTitle"
                    type="text"
                    value={trainingTitle}
                    onChange={(e) => setTrainingTitle(e.target.value)}
                  />
                </div>
                <div>
                  <div>
                    <FormLabel htmlFor="inputPrice">Price</FormLabel>
                    <FormInputBasic
                      id="inputPrice"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <FormLabel htmlFor="inputTrainingURL">Training URL</FormLabel>
                  <FormInputBasic
                    id="inputTrainingURL"
                    type="url"
                    value={trainingURL}
                    onChange={(e) => setTrainingURL(e.target.value)}
                  />
                </div>
              </div>
            )}

            {requestType !== "" && (
              <div>
                <div>
                  <FormLabel htmlFor="inputComment">Comment</FormLabel>
                  <FormInputTextArea
                    id="inputComment"
                    placeholder="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>

                {requestType === "Absence" && (
                  <div>
                    <FormLabel htmlFor="avatar">Add a file:</FormLabel>
                    <ButtonUpload
                      id="attachment"
                      name="attachment"
                      iconURL={"/image-upload.svg"}
                      buttonText={"Upload Image"}
                      onFileSelect={handleFileSelect}
                    />
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "10px",
                  }}
                >
                  <ButtonBrand
                    iconURL={"tick-circle.png"}
                    buttonText="Send Request"
                    type="submit"
                  />
                </div>
              </div>
            )}
          </ZeForm>
        </Modal>
      </ModalOverlay>
    </>
  );
}
