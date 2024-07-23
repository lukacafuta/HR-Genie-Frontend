import {useDispatch, useSelector} from "react-redux";
import TrainingCard from "./TrainingCard";
import {useEffect, useState} from "react";
import {loadTrainings} from "../store/slices/RequestSlice";
import {RowCardContainer} from "../styles/cardStyles.js";
import {api} from "../common/api.js";

export default function TrainingContainer({refresh}) {
    const dispatch = useDispatch();
    const view = useSelector((state) => state.view.view);
    const trainingList = useSelector((state) => state.request.trainingList);
    const accessToken = useSelector((state) => state.user.accessToken);

    const fetchTrainings = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };

        try {
            // Is the user in Manager or Employee View
            let endpointForTrainings =
                view === "manager" ? "/trainings/" : "/trainings/me/";
            // console.log("yep i am here");
            api.get(endpointForTrainings, config).then((res) => {
                // console.log("API call successful", res.data);
                let trainingData = res.data;
                dispatch(loadTrainings(trainingData));
            });
        } catch (error) {
            console.log("nope");
            console.error(error);
        }
    };
    const updateRequests = () => {
        fetchTrainings();
    };
    // created to refresh the requests

    useEffect(() => {
        fetchTrainings();
    }, [dispatch, refresh]);

    return (
        <>
            <RowCardContainer>
                {trainingList.map((oneTraining) => (
                    <TrainingCard key={oneTraining.id} oneTraining={oneTraining} updateRequests={updateRequests}/>
                ))}
            </RowCardContainer>
        </>
    );
}
