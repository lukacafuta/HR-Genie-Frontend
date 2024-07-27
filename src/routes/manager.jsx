import {
    RouteContentStyled,
    RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import {useSelector} from "react-redux";
import RequestMiniTable from "../components/RequestsMiniTable.jsx";
import {RequestMiniTableAreaStyled} from "../styles/miniTableStyles.js";
import {
    ManagerBarChartAbsence,
    ManagerBarChartTraining,
    ManagerBarChartVacation
} from "../components/ManagerBarCharts.jsx";
import {useEffect, useState} from "react";
import {api} from "../common/api.js";

export default function ManagerRoute() {
    const requests = useSelector((state) => state.request.requestList);
    const trainingRequests = useSelector((state) => state.request.trainingList);

    const [vacationData, setVacationData] = useState([]);
    const [absenceData, setAbsenceData] = useState([]);
    const [trainingData, setTrainingData] = useState([]);

    // const vacationRequests = requests.filter(request => request.type === "Vacation");
    // const trainingRequests = requests.filter(request => request.type === "Training");
    // const absenceRequests = requests.filter(request => request.type === "Absence");

    const accessToken = useSelector((state) => state.user.accessToken); // fetch accessToken

    useEffect(() => {
        api.setAuthToken(accessToken);

        const fetchData = async () => {
            try {
                const response = await api.get("/kpi/yearly/manager/myteam/");
                const data = response.data;
                console.log('KPI data:', data)

                const vacation = data.map(item => ({
                    name: `${item.user_firstname} ${item.user_lastname}`,
                    Approved: item.absence_duration_hours__vacation__approved / item.nr_working_h_per_day_100perc_pensum,
                    Pending: item.absence_duration_hours__vacation__pending / item.nr_working_h_per_day_100perc_pensum,
                    Residual: item.nr_tot_vacation_days - (item.absence_duration_hours__vacation__approved + item.absence_duration_hours__vacation__pending) / item.nr_working_h_per_day_100perc_pensum,
                }));

                const absence = data.map(item => ({
                    name: `${item.user_firstname} ${item.user_lastname}`,
                    Sickness: item.absence_duration_hours__sick_leave__accepted / item.nr_working_h_per_day_100perc_pensum,
                    Maternity: 0, // no data in the backend
                    Paternity: 0, // no data in the backend
                }));

                const training = data.map(item => ({
                    name: `${item.user_firstname} ${item.user_lastname}`,
                    Approved: item.training_nr_courses__approved__notStarted || 0,
                    Pending: item.training_nr_courses__pending__notStarted || 0,
                }));

                setVacationData(vacation);
                setAbsenceData(absence);
                setTrainingData(training);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <RouteContentStyled>
            <RouteHeadStyled>
                <div>
                    <h2>Manager Dashboard</h2>
                    <p>Here you can get an overview about the requests submitted.</p>
                </div>
            </RouteHeadStyled>
            {/*<h3>Calendar</h3>*/}
            {/*<p>Calendar goes here</p>*/}
            {/*<h3>Nice Charts</h3>*/}
            {/*<p style={{marginBottom: "2rem"}}>Charts go here</p>*/}

            {/* CHARTS Manager */}
            <div style={{marginBottom: "2rem"}}>
                <ManagerBarChartVacation data={vacationData}/>
            </div>
            <div style={{marginBottom: "2rem"}}>
                <ManagerBarChartAbsence data={absenceData}/>
            </div>
            <div style={{marginBottom: "2rem"}}>
                <ManagerBarChartTraining data={trainingData}/>
            </div>

            <RequestMiniTableAreaStyled>
                <RequestMiniTable
                    name={"Vacation Requests"}
                    type={"vacation"}
                    requests={requests}
                />
                <RequestMiniTable
                    name={"Training Requests"}
                    type={"training"}
                    requests={trainingRequests}
                />
                <RequestMiniTable
                    name={"Absence Notice"}
                    type={"sick_leave"}
                    requests={requests}
                />
            </RequestMiniTableAreaStyled>
        </RouteContentStyled>
    );
}
