import { AppConstants } from '@common/constants';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { stringify } from 'qs';

const baseURL = AppConstants.API_URL;
const baseLoginURL: string = AppConstants.API_LOGIN_URL;

const ApiClient = axios.create({
    baseURL,
    timeout: 100000,
    paramsSerializer: (params: any) => stringify(params, { arrayFormat: 'repeat' }),
});

ApiClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        // let token = null;
        // try {
        //     const tokenStorage: StorageTokenUser | null = await getTokenStorage();
        //     if (tokenStorage !== null) {
        //         const dataTokenStorage: StorageTokenUser = tokenStorage;
        //         token = dataTokenStorage.Token;
        //     }
        // } catch (err) {
        //     console.error(err);
        // }
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        //     config.headers['Authorization-Token'] = token;
        // }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

ApiClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error: AxiosError<AxiosResponse>) {
        // if (error.response?.status === 401) {
        // }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

const ApiLoginClient = axios.create({
    baseURL: baseLoginURL,
    timeout: 100000,
    paramsSerializer: (params: any) => stringify(params, { arrayFormat: 'repeat' }),
});
ApiLoginClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

export { ApiClient, ApiLoginClient };
