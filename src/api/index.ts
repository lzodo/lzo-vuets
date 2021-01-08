import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

//配置基础路径
axios.defaults.baseURL = `http://localhost:8080`;

//请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});

//响应拦截
axios.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.data.status != 0) {
            return Promise.reject(response.data.data);
        }
        return response.data.data;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default axios;
