import { ApiClient, ApiLoginClient } from './ApiClient';
import { UserService } from '@services/user/api';
import { AuthService } from '@services/auth/api';

export class ApiService {
    public auth: AuthService;
    public user: UserService;

    constructor() {
        this.auth = new AuthService(ApiLoginClient);
        this.user = new UserService(ApiClient);
    }
}

const api = new ApiService();

export default api;
