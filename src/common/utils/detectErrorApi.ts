import { AxiosError } from 'axios';

export enum STATUS_CODE_APIS {
    CODE_400 = 400,
    CODE_200 = 200,
    CODE_201 = 201,
}

export const getErrorMessage = (error: AxiosError) => {
    if (error.response?.status === STATUS_CODE_APIS.CODE_400) {
        return error.response?.data.message;
    }
    return 'Internal Server Error';
};