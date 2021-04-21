import { BookTicketParams, BookTicketResponse } from '@common/api/ApiTypes';
import { AxiosInstance } from 'axios';

const cinemaUrl = '/cinema/';
const userUrl = '/user/';

export class UserService {
    constructor(private axios: AxiosInstance) {}

    // getUserData = async (id: number): Promise<AxiosResponse<any>> => {
    //     const res = await this.axios.get('url', {});
    //     return res;
    // };

    getUserSettings = async (): Promise<any> => {
        const res = await this.axios.get('url');
        return res.data;
    };

    getProfile = async (): Promise<any> => {
        const res = await this.axios.get(`${userUrl}get-profile`);
        return res.data;
    };

    bookTicket = async (params: BookTicketParams): Promise<BookTicketResponse> => {
        const res = await this.axios.post(`${cinemaUrl}book-ticket`, params);
        return res.data;
    };

    checkSeatSelected = async (params: any): Promise<any> => {
        const res = await this.axios.post(`${cinemaUrl}check-seat-selected`, params);
        return res.data;
    };

    getHistoryBooked = async (): Promise<any> => {
        const res = await this.axios.get(`${cinemaUrl}get-history-booked`);
        return res.data;
    };
}
