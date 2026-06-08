import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
    const method = config.method.toUpperCase();
    const url = config.baseURL + config.url;
    console.log(`\x1b[36m[API]\x1b[0m \x1b[33m${method}\x1b[0m ${url}`);
    return config;
})

axiosInstance.interceptors.response.use(
    (response) => {
        const method = response.config.method.toUpperCase();
        const url = response.config.baseURL + response.config.url;
        const status = response.status;
        console.log(`\x1b[36m[API]\x1b[0m \x1b[33m${method}\x1b[0m ${url} \x1b[32m${status}\x1b[0m`);
        return response;
    },
    (error) => {
        if (error.response) {
            const method = error.response.config.method.toUpperCase();
            const url = error.response.config.baseURL + error.response.config.url;
            const status = error.response.status;
            console.log(`\x1b[36m[API]\x1b[0m \x1b[33m${method}\x1b[0m ${url} \x1b[31m${status}\x1b[0m`);
        }
        return Promise.reject(error);
    }
)

export default axiosInstance