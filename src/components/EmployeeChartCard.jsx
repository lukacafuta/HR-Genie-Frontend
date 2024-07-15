import {
  HalfWidthCard,
  HalfWidthCardContent,
  HalfWidthCardLabel,
  HalfWidthCardTitle,
} from "../styles/cardStyles.js";
import EmployeeChart from "./EmployeeChart.jsx";

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
  return (
    <>
      <HalfWidthCard>
        <HalfWidthCardTitle>My Holiday Balance</HalfWidthCardTitle>
        <div style={{ display: "flex" }}>
          <HalfWidthCardContent>
            <span>
              <HalfWidthCardLabel>
                <img src="/tree.png" alt="tree" /> Total Allowance:{" "}
              </HalfWidthCardLabel>{" "}
              27 Days
            </span>
            <span>
              <HalfWidthCardLabel>
                <img src="/eye.png" alt="eye" /> Pending:{" "}
              </HalfWidthCardLabel>
              {pendingFigure.value} Days
            </span>
            <span>
              <HalfWidthCardLabel>
                <img src="/calendar.png" alt="calendar" /> Approved:{" "}
              </HalfWidthCardLabel>
              {approvedFigure.value} Days
            </span>
            <span>
              <HalfWidthCardLabel>
                <img src="/calendar.png" alt="calendar" /> Remaining:{" "}
              </HalfWidthCardLabel>
              {availableFigure.value} Days
            </span>
          </HalfWidthCardContent>
          <HalfWidthCardContent>
            <EmployeeChart />
          </HalfWidthCardContent>
        </div>
      </HalfWidthCard>
    </>
  );
}
