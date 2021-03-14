import { createAction } from 'redux-actions';

const ns = 'auth/';

export const ActionsTypes = {
    loginSuccess: `${ns}LOGIN_SUCCESS_ACTION`,
    signUpSuccess: `${ns}SIGN_UP_SUCCESS_ACTION`,
    logout: `${ns}LOGOUT_ACTION`,
    verificationCodeSuccessAction: `${ns}VERIFICATION_CODE_SUCCESS_ACTION`,
};

export interface PayloadLoginSuccess {
    username: string;
}
export interface PayloadSignUpSuccess {
    username: string;
}

export interface PayloadVerificationCodeSuccess {
    token: string;
}

export const loginSuccessAction = createAction<PayloadLoginSuccess>(ActionsTypes.loginSuccess);

export const signUpSuccessAction = createAction<PayloadSignUpSuccess>(ActionsTypes.signUpSuccess);

export const verificationCodeSuccessAction = createAction<PayloadVerificationCodeSuccess>(ActionsTypes.verificationCodeSuccessAction);

export const logoutAction = createAction(ActionsTypes.logout);