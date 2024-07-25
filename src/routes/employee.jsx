import { useState, useCallback } from "react";

import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import RequestForm from "../components/forms/RequestForm.jsx";
import {
  RouteContentStyled,
  RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import RequestContainer from "../components/RequestContainer.jsx";
import EmployeeSummaryCard from "../components/EmployeeSummaryCard.jsx";
import EmployeeChartCard from "../components/EmployeeChartCard.jsx";
import TrainingContainer from "../components/TrainingContainer.jsx";

export default function EmployeeRoute() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefresh((prev) => !prev); // Toggle boolean value to trigger refresh
  }, []);

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

      <RequestForm
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onFormSubmit={handleRefresh}
      />
      <div style={{ display: "flex", gap: "5px" }}>
        <EmployeeSummaryCard />
        <EmployeeChartCard />
      </div>
      <h3 style={{ marginBottom: "5px", marginTop: "20px" }}>Requests</h3>
      <RequestContainer refresh={refresh} />
      <h3 style={{ marginBottom: "5px", marginTop: "20px" }}>Trainings</h3>
      <TrainingContainer refresh={refresh} />
    </RouteContentStyled>
  );
}
