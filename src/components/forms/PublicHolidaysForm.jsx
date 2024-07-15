import {useState} from "react";

import {
    Modal,
    ModalOverlay,
    ZeForm,
    BtnClose,
    FormInputBasic,
    FormLabel,
} from "../../styles/formStyles.js";

import ButtonBrand from "../buttons/ButtonBrand.jsx";

export default function RequestForm({isModalOpen, closeModal}) {
    const [publicHolidayName, setFirstName] = useState("");
    const [publicHolidayDate, setLastName] = useState("");


    //const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");
        let userId = "1";
        const formContent = {
            publicHolidayName,
            publicHolidayDate,

        };
        console.log("Form Content: ", JSON.stringify(formContent));
        console.log("User ID: ", userId);
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
                        <h2>Add Holiday</h2>
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
                            <FormLabel htmlFor="inputPublicHolidayName">Holiday Name</FormLabel>
                            <FormInputBasic
                                id="inputPublicHolidayName"
                                type="text"
                                value={publicHolidayName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div>
                            <FormLabel htmlFor="inputPublicHolidayDate">Date</FormLabel>
                            <FormInputBasic
                                id="inputPublicHolidayDate"
                                type="text"
                                value={publicHolidayDate}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>


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
                    </ZeForm>
                </Modal>
            </ModalOverlay>
        </>
    );
}
