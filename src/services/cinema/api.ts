import { GetCinemaByIdParams, GetSeatOfCinemaParams, ListFilmsResponse, SendEmailInviteFriendsParams } from '@common/api/ApiTypes';
import { AxiosInstance } from 'axios';

const cinemaUrl = '/cinema/';

export class CinemaService {
    constructor(private axios: AxiosInstance) {}

    getListFilms = async (): Promise<ListFilmsResponse> => {
        const res = await this.axios.get(`${cinemaUrl}get-list-films`);
        return res.data;
    };

    getCinemaById = async (params: GetCinemaByIdParams): Promise<any> => {
        const res = await this.axios.post(`${cinemaUrl}get-cinema-by-film-id`, params);
        return res.data;
    };

    paymentVNPay = async (params: any): Promise<any> => {
        const res = await this.axios.post(`${cinemaUrl}create-payment`, params);
        return res.data;
    };

    getFilmsSuggest = async (): Promise<ListFilmsResponse> => {
        const res = await this.axios.get(`${cinemaUrl}get-suggest-films`);
        return res.data;
    };

    getFilmsComingSoon = async (): Promise<ListFilmsResponse> => {
        const res = await this.axios.get(`${cinemaUrl}get-comingsoon-films`);
        return res.data;
    };

    sendEmailInviteFriends = async (params: SendEmailInviteFriendsParams): Promise<any> => {
        const res = await this.axios.post(`${cinemaUrl}send-email-invite-friends`, params);
        return res.data;
    };

    getSeatOfCinema = async (params: GetSeatOfCinemaParams): Promise<any> => {
        const res = await this.axios.post(`${cinemaUrl}get-seats-of-room`, params);
        return res.data;
    };
}
