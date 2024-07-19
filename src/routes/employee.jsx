import {useEffect, useState} from "react";

import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import RequestForm from "../components/forms/RequestForm.jsx";
import {
    RouteContentStyled,
    RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import RequestContainer from "../components/RequestContainer.jsx";
import EmployeeSummaryCard from "../components/EmployeeSummaryCard.jsx";
import EmployeeChartCard from "../components/EmployeeChartCard.jsx";
import {api} from "../common/api.js";
import {ChangeCompanyName} from "../store/slices/CompanySlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUserObject} from "../store/slices/UserSlice.jsx";

export default function EmployeeRoute() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.userObject);
    console.log("from store: ", user)


    useEffect(() => {
        if (user.length === 0) {
            const token = localStorage.getItem("accessToken");
            // console.log(token)
            api.setAuthToken(token);
            api("/users/me/")
                .then((res) => {
                    console.log("fetched: ", res.data[0]);
                    dispatch(setUserObject(res.data[0]));
                }).catch((err) => {
                console.log(err);
            })
        }
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

            <RequestForm isModalOpen={isModalOpen} closeModal={closeModal}/>
            <div style={{display: "flex", gap: "5px"}}>
                <EmployeeSummaryCard/>
                <EmployeeChartCard/>
            </div>
            <h3 style={{marginBottom: "5px"}}>Requests</h3>
            <RequestContainer/>
        </RouteContentStyled>
    );
}
