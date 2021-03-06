import { ApiClient } from './ApiClient';
import { UserService } from '@services/user/api';

export class ApiService {
    public user: UserService;

    constructor() {
        this.user = new UserService(ApiClient);
    }
}

const api = new ApiService();

export default api;
