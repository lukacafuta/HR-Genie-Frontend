import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { useSelector } from "react-redux";
import { api } from "../../common/api.js";
import { cleanUpOutgoingDateTime } from "../../common/utils.js";

// eslint-disable-next-line react/prop-types
export default function RequestForm({ isModalOpen, closeModal, onFormSubmit }) {
  const navigate = useNavigate();

  const [requestType, setRequestType] = useState("");
  const [fromDate, setFromDate] = useState("2024-07-01T08:00");
  const [toDate, setToDate] = useState("2024-07-02T17:00");
  const [comment, setComment] = useState("");

  const [price, setPrice] = useState("");
  const [fromDateTraining, setFromDateTraining] = useState("");
  const [toDateTraining, setToDateTraining] = useState("");
  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingURL, setTrainingURL] = useState("");

  //const dispatch = useDispatch();
  const storeToken = useSelector((state) => state.user.accessToken);
  const config = {
    headers: {
      Authorization: `Bearer ${storeToken}`,
    },
  };

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
    const payloadAbsence = {
      startDt: cleanUpOutgoingDateTime(fromDate),
      endDt: cleanUpOutgoingDateTime(toDate),
      reason: requestType,
    };
    const payloadTraining = {
      startDt: cleanUpOutgoingDateTime(fromDate),
      endDt: cleanUpOutgoingDateTime(toDate),
      trainingURL: "http://google.com",
      title: trainingTitle,
      description: comment,
      price: price,
    };
    let payload = requestType === "training" ? payloadTraining : payloadAbsence;
    let endpointRequest =
      requestType === "training" ? "trainings/me" : "/absences/me/";
    console.log(JSON.stringify(formContent));
    //dispatch()

    try {
      console.log("yep");
      api.post(endpointRequest, payload, config).then((res) => {
        console.log("API call successful", res.data);
        if (onFormSubmit) onFormSubmit(); // Call the callback to refresh data
      });
    } catch (error) {
      console.log("nope");
      console.error(error);
    }
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
                <option value="vacation">Vacation</option>
                <option value="sick_leave">Absence</option>
                <option value="training">Training</option>
              </FormInputSelect>
            </div>

            {(requestType === "vacation" || requestType === "sick_leave") && (
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

            {requestType === "training" && (
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

                {requestType === "sick_leave" && (
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
                    iconURL={"/tick-circle.png"}
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
