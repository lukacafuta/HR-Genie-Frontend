import {useState} from "react";

import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import EmployeeForm from "../components/forms/EmployeeForm.jsx";
import {
    RouteContentStyled,
    RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import UserContainer from "../components/UserContainer.jsx";

export default function CompanyEmployeesRoute() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <RouteContentStyled>
            <RouteHeadStyled>
                <div>
                    <h2>Employees</h2>
                    <p>Add something here</p>
                </div>
                {/*<ButtonBrand iconURL="/plus-add.svg" buttonText="Add Employee"/>*/}
                <ButtonBrand
                    iconURL={"/plus-add.svg"}
                    buttonText={"Add Employee"}
                    onClick={openModal}
                />
                <EmployeeForm isModalOpen={isModalOpen} closeModal={closeModal}/>
                {/*</div>*/}
            </RouteHeadStyled>
            <UserContainer/>
        </RouteContentStyled>
    );
}
