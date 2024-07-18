import axios from "axios";

export const api = axios.create({
    baseURL: "https://hr-genie-backend-24b07ef76680.herokuapp.com"
});
