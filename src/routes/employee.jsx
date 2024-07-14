import { useState } from "react";

import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import RequestForm from "../components/forms/RequestForm.jsx";
import {
  RouteContentStyled,
  RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import RequestContainer from "../components/RequestContainer.jsx";

export default function EmployeeRoute() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <RouteContentStyled>
      <RouteHeadStyled>
        <div>
          <h2>Welcome</h2>
          <p>Here you can manage your requests and personal information.</p>
        </div>
        <ButtonBrand
          iconURL={"/plus-add.svg"}
          buttonText={"New Request"}
          onClick={openModal}
        />
      </RouteHeadStyled>

      <RequestForm isModalOpen={isModalOpen} closeModal={closeModal} />
      <h3 style={{ marginBottom: "5px" }}>Requests</h3>
      <RequestContainer />
    </RouteContentStyled>
  );
}
