import { BookTicketParams, BookTicketResponse, GetCinemaByIdParams, ListFilmsResponse } from '@common/api/ApiTypes';
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

    checkSeatSelected = async (params: any): Promise<any> => {
        const res = await this.axios.post(`${cinemaUrl}check-seat-selected`, params);
        return res.data;
    };

    bookTicket = async (params: BookTicketParams): Promise<BookTicketResponse> => {
        const res = await this.axios.post(`${cinemaUrl}book-ticket`, params);
        return res.data;
    };

    paymentVNPay = async (params: any): Promise<any> => {
        const res = await this.axios.post(`${cinemaUrl}create-payment`, params);
        return res.data;
    };
}
