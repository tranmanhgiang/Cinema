import { BookTicketParams, BookTicketResponse, EditProfileParams, PopcornsResponse } from '@common/api/ApiTypes';
import { AxiosInstance } from 'axios';

const cinemaUrl = '/cinema/';
const userUrl = '/user/';
const adminUrl = '/admin/';

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

    editProfile = async (params: EditProfileParams): Promise<any> => {
        const res = await this.axios.post(`${adminUrl}edit-user`, params);
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

    getCoupons = async (): Promise<any> => {
        const res = await this.axios.get(`${adminUrl}get-coupons`);
        return res.data;
    };

    getPopcorns = async (): Promise<PopcornsResponse> => {
        const res = await this.axios.get(`${cinemaUrl}get-popcorns`);
        return res.data;
    };
}
