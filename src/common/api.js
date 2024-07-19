import axios from "axios";

const api = axios.create({
    baseURL: "https://hr-genie-backend-24b07ef76680.herokuapp.com"
});


api.setAuthToken = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export {api};