import config from "@/configs/configs";
import { clearAuthLocalStorage, getAuthLocalStorage } from "@/utils";
import axios from "axios";

export const axiosClientService = axios.create({
    baseURL: `${config.apiURl}/api`,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

axiosClientService.interceptors.request.use(
    (config) => {
        const token = getAuthLocalStorage();

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },

    (error) => {
        return Promise.reject(error);
    },
);

axiosClientService.interceptors.response.use(
    (response) => {
        return response.data.data;
    },

    (error) => {
        if (
            error.response.status === 401 &&
            error.config.url !== "/auth/login"
        ) {
            clearAuthLocalStorage();
            localStorage.clear();
            window.location.href = "/login";
        }

        return Promise.reject(error);
    },
);
