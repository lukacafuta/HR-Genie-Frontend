import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { employeeChartData } from "./EmployeeChartCard";

const COLORS = ["#00C49F", "#0088FE", "#FF8042"];

export default class EmployeeChart extends PureComponent {
  render() {
    return (
      <PieChart width={200} height={100} onMouseEnter={this.onPieEnter}>
        <Pie
          data={employeeChartData}
          cx={100}
          cy={80}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {employeeChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}
