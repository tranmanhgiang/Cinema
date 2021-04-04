import {
    ForgotPassword,
    ForgotPasswordResponse,
    FormSignUp,
    LoginResponse,
    SendEmailGetVerifyCode,
    SendEmailGetVerifyCodeResponse,
    SignUpResponse,
    VerifyCodeForgotPassword,
    VerifyCodeForgotPasswordResponse,
} from '@common/api/ApiTypes';
import { FormLogin } from '@pages/auth/login/Login';
import { AxiosInstance } from 'axios';

const authUrl = '/user/';

export class AuthService {
    constructor(private axios: AxiosInstance) {}

    login = async (params: FormLogin): Promise<LoginResponse> => {
        const res = await this.axios.post(`${authUrl}login`, params);
        return res.data;
    };

    sendEmailGetVerifyCode = async (params: SendEmailGetVerifyCode): Promise<SendEmailGetVerifyCodeResponse> => {
        const res = await this.axios.post(`${authUrl}send-email-get-verify-code`, params);
        return res.data;
    };

    signUp = async (params: FormSignUp): Promise<SignUpResponse> => {
        const res = await this.axios.post(`${authUrl}signup`, params);
        return res.data;
    };

    sendEmailForgotPassword = async (params: SendEmailGetVerifyCode): Promise<SendEmailGetVerifyCodeResponse> => {
        const res = await this.axios.post(`${authUrl}send-email-forgot-password`, params);
        return res.data;
    };

    verifyCodeForgotPassword = async (params: VerifyCodeForgotPassword): Promise<VerifyCodeForgotPasswordResponse> => {
        const res = await this.axios.post(`${authUrl}verify-code-forgot-password`, params);
        return res.data;
    };

    forgotPassword = async (params: ForgotPassword): Promise<ForgotPasswordResponse> => {
        const res = await this.axios.post(`${authUrl}forgot-password`, params);
        return res.data;
    };
}
