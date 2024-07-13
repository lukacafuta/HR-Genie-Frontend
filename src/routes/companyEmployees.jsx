import { useState } from "react";

import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import EmployeeForm from "../components/forms/EmployeeForm.jsx";

export default function CompanyEmployeesRoute() {
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
        <h1>Company Employee Page</h1>
        <div>
          <h3>Add employee</h3>
        </div>

        <ButtonBrand
          iconURL={"/plus.png"}
          buttonText={"New Employee"}
          onClick={openModal}
        />
        <EmployeeForm isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
}
