import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const navigate = useNavigate();

        if (
            error.response.status === 401 && error.config) {
            navigate("/register");
        };
        if (error.response.status === 404){
            navigate("*");
        };
        if (error.response.status === 400){
            navigate("/bad-request");
        };
        if (error.response.status === 500){
            navigate("/server-error")
        };
        if (error.response.status === 403){
            navigate("/forbidden")
        };

        return Promise.reject(error);
    }
);
export default api;
