export interface FormLogin {
    email: string;
    password: string;
}

export interface LoginResponse {
    Token: string;
}

export interface FormSignUp {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    verifyCode: string;
    hash: string;
}

export interface SignUpResponse {
    message: string;
}

export interface SendEmailGetVerifyCode {
    email: string;
}

export interface SendEmailGetVerifyCodeResponse {
    message: string;
    hash: string;
}

export interface VerifyCodeForgotPassword {
    verifyCode: string;
    hash: string;
}

export interface VerifyCodeForgotPasswordResponse {
    message: string;
}

export interface ForgotPassword {
    email: string;
    newPassword: string;
}

export interface ForgotPasswordResponse {
    message: string;
}

export interface FilmType {
    id: number;
    fileName: string;
    imageUrl: string;
    description: string;
    author: string;
    actors: string;
    releaseDate: string;
    duration: string;
}

export interface ListFilmsResponse {
    data: FilmType[];
    message: string;
}

export interface GetCinemaByIdParams {
    date: string;
    filmId: number;
}

export interface BookTicketParams {
    userId: number;
    price: number;
    code: string;
    date: string;
    filmId: number;
    theaterId: number;
    seat: number[];
}

export interface BookTicketResponse {
    message: string;
}
