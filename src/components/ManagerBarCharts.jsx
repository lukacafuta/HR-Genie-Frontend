import React, {PureComponent} from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';


// export default class Example extends PureComponent {
// export default function ManagerBarChartVacation({data}) {
export function ManagerBarChartVacation({data}) {
    return (
        <>
            <h3>Vacations of My Team in the Calendar Year 2024</h3>

            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart
                width={1000}
                height={400}
                data={data} // this is taken form the prop
                stackOffset="sign"
                maxBarSize={300}  // Set the maximum width of the bars
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis>
                    <Label
                        value="Days"
                        angle={-90}
                        offset={-50} // Move the label more to the left
                        position="insideLeft" // Position inside the left side of the Y-axis
                    />
                </YAxis>
                <Tooltip/>
                <Legend verticalAlign="top" height={36}/>
                <ReferenceLine y={0} stroke="#000"/>
                <Bar dataKey="Approved" fill="#8884d8" stackId="stack"/>
                <Bar dataKey="Pending" fill="#203bd4" stackId="stack"/>
                <Bar dataKey="Residual" fill="#82ca9d" stackId="stack"/>
            </BarChart>
            {/* </ResponsiveContainer> */}

        </>
    );
}


// export function ManagerBarChartAbsence({data}) {
//     return (
//         <>
//             <h3>Other Absences of My Team in the Calendar Year 2024</h3>
//
//             {/* <ResponsiveContainer width="100%" height="100%"> */}
//             <BarChart
//                 width={1000}
//                 height={400}
//                 data={data} // this is taken form the prop
//                 stackOffset="sign"
//                 maxBarSize={300}  // Set the maximum width of the bars
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3"/>
//                 <XAxis dataKey="name"/>
//                 <YAxis>
//                     <Label
//                         value="Days"
//                         angle={-90}
//                         position="insideLeft" // Position inside the left side of the Y-axis
//                         // offset={-0} // Move the label more to the left
//                     />
//
//                 </YAxis>
//                 <Tooltip/>
//                 <Legend verticalAlign="top" height={36}/>
//                 <ReferenceLine y={0} stroke="#000"/>
//                 <Bar dataKey="Sickness" fill="#8884d8" stackId="stack"/>
//                 <Bar dataKey="Maternity" fill="#203bd4" stackId="stack"/>
//                 <Bar dataKey="Paternity" fill="#82ca9d" stackId="stack"/>
//             </BarChart>
//             {/* </ResponsiveContainer> */}
//
//         </>
//     );
// }


// export function ManagerBarChartTraining({data}) {
//     return (
//         <>
//             <h3>Training Requests of My Team in the Calendar Year 2024</h3>
//
//             {/* <ResponsiveContainer width="100%" height="100%"> */}
//             <BarChart
//                 width={1000}
//                 height={400}
//                 data={data} // this is taken form the prop
//                 stackOffset="sign"
//                 maxBarSize={300}  // Set the maximum width of the bars
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3"/>
//                 <XAxis dataKey="name"/>
//                 <YAxis>
//                     <Label
//                         value="Nr of Trainings"
//                         angle={-90}
//                         // offset={-50} // Move the label more to the left
//                         position="insideLeft" // Position inside the left side of the Y-axis
//                     />
//                 </YAxis>
//                 <Tooltip/>
//                 <Legend verticalAlign="top" height={36}/>
//                 <ReferenceLine y={0} stroke="#000"/>
//                 <Bar dataKey="Approved" fill="#8884d8" stackId="stack"/>
//                 <Bar dataKey="Pending" fill="#203bd4" stackId="stack"/>
//             </BarChart>
//             {/* </ResponsiveContainer> */}
//
//         </>
//     );
// }


