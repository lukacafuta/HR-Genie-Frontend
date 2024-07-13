import { useState } from "react";

import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import RequestForm from "../components/forms/RequestForm.jsx";

export default function EmployeeRoute() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/*temporary styling to make testing not too ugly*/}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        }}
      >
        <h1>Employee Page</h1>
        <div>
          <h3>Employee Info Card</h3>
          <span>Name, City, Manager ...</span>
          <h3>Employee Balance Card</h3>
          <span>Five days available, chart, ...</span>
          <h3>Request infos</h3>
          <span>Request 1, Request 2, ...</span>
        </div>

        <ButtonBrand
          iconURL={"/plus.png"}
          buttonText={"New Request"}
          onClick={openModal}
        />
        <RequestForm isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
}
