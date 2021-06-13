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
    success: string;
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
    // userId: number;
    price: number;
    code: string;
    date: string;
    time: string;
    filmId: number;
    theaterId: number;
    seat: number[];
    popcornId: string;
}

export interface BookTicketResponse {
    message: string;
}

export interface EditProfileParams {
    id: number;
    firstName: string;
    email: string;
    lastName: string;
    phone: number;
    isDeleted: number;
}

export interface ToppingType {
    quantity: number;
    id: number;
    name: string;
    price: number;
}

export interface PopcornItem {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    isDeleted: number;
}

export interface PopcornsResponse {
    data: PopcornItem[];
    message: string;
}

export interface SendEmailInviteFriendsParams {
    email: string;
    content: string;
}

export interface GetSeatOfCinemaParams {
    roomId: number;
}
