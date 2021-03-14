import { AxiosInstance } from 'axios';

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
}
