import {useState} from "react";

import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import RequestForm from "../components/forms/RequestForm.jsx";
import {RouteContentStyled, RouteHeadStyled} from "../styles/routeGeneralStyles.js";

export default function EmployeeRoute() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <RouteContentStyled>
            <RouteHeadStyled>
                <div>
                    <h2>Company Settings</h2>
                    <p>Add something here</p>
                </div>
                <ButtonBrand
                    iconURL={"/plus-add.svg"}
                    buttonText={"New Request"}
                    onClick={openModal}
                />
            </RouteHeadStyled>

            <div>
                <h3>Employee Info Card</h3>
                <span>Name, City, Manager ...</span>
                <h3>Employee Balance Card</h3>
                <span>Five days available, chart, ...</span>
                <h3>Request infos</h3>
                <span>Request 1, Request 2, ...</span>
            </div>

            <RequestForm isModalOpen={isModalOpen} closeModal={closeModal}/>

        </RouteContentStyled>
    );
}
