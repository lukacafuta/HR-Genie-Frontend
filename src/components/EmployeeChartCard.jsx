import {
  HalfWidthCard,
  HalfWidthCardContent,
  HalfWidthCardLabel,
  HalfWidthCardTitle,
  MiniIconStyled,
} from "../styles/cardStyles.js";
import EmployeeChart from "./EmployeeChart.jsx";
import { useSelector } from "react-redux";
import useGenieAPI from "../hooks/useGenieAPI.js";
import { useEffect } from "react";

export const employeeChartData = [
  { name: "Total", value: 27 },
  { name: "Available", value: 15 },
  { name: "Pending", value: 2 },
  { name: "Approved", value: 7 },
];

const pendingFigure = employeeChartData.find((data) => data.name === "Pending");
const availableFigure = employeeChartData.find(
  (data) => data.name === "Available",
);
const approvedFigure = employeeChartData.find(
  (data) => data.name === "Approved",
);

export default function EmployeeChartCard() {
  const { fetchUserKPIs } = useGenieAPI();

  const userKPIs = useSelector((state) => state.user.userKPIs);

  useEffect(() => {
    fetchUserKPIs();
  }, []);

  let kpi = {
    pending: userKPIs.absence_duration_hours__vacation__pending
      ? userKPIs.absence_duration_hours__vacation__pending / 8
      : 0,
    approved: userKPIs.absence_duration_hours__vacation__approved
      ? userKPIs.absence_duration_hours__vacation__approved / 8
      : 0,
    rejected: userKPIs.absence_duration_hours__vacation__rejected
      ? userKPIs.absence_duration_hours__vacation__rejected / 8
      : 0,
  };

  let remaining = userKPIs.nr_tot_vacation_days - kpi.approved;

  let chartData = [
    { name: "Pending", value: kpi.pending },
    { name: "Approved", value: kpi.approved },
    { name: "Remaining", value: remaining },
  ];

  return (
    <>
      <HalfWidthCard>
        <HalfWidthCardTitle>My Holiday Balance</HalfWidthCardTitle>
        <div style={{ display: "flex" }}>
          <HalfWidthCardContent>
            <span>
              <HalfWidthCardLabel>
                <MiniIconStyled src="/kpi-available.png" alt="available" />{" "}
                Total Allowance:{" "}
              </HalfWidthCardLabel>{" "}
              {userKPIs.nr_tot_vacation_days} Days
            </span>
            <span>
              <HalfWidthCardLabel>
                <MiniIconStyled src="/kpi-pending.png" alt="pending" /> Pending:{" "}
              </HalfWidthCardLabel>
              {kpi.pending} Days
            </span>
            <span>
              <HalfWidthCardLabel>
                <MiniIconStyled src="/kpi-rejected.png" alt="rejected" />{" "}
                Rejected:{" "}
              </HalfWidthCardLabel>
              {kpi.rejected} Days
            </span>
            <span>
              <HalfWidthCardLabel>
                <MiniIconStyled src="/kpi-approved.png" alt="approved" />{" "}
                Approved:{" "}
              </HalfWidthCardLabel>
              {kpi.approved} Days
            </span>
            <span>
              <HalfWidthCardLabel>
                <MiniIconStyled src="/kpi-remaining.png" alt="remaining" />{" "}
                Remaining:{" "}
              </HalfWidthCardLabel>
              {remaining} Days
            </span>
          </HalfWidthCardContent>
          <HalfWidthCardContent>
            <EmployeeChart chartData={chartData} />
          </HalfWidthCardContent>
        </div>
      </HalfWidthCard>
    </>
  );
}
