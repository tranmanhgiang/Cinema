import { ApiClient, ApiLoginClient } from './ApiClient';
import { UserService } from '@services/user/api';
import { AuthService } from '@services/auth/api';
import { CinemaService } from '@services/cinema/api';

export class ApiService {
    public auth: AuthService;
    public user: UserService;
    public cinema: CinemaService;

    constructor() {
        this.auth = new AuthService(ApiLoginClient);
        this.user = new UserService(ApiClient);
        this.cinema = new CinemaService(ApiLoginClient);
    }
}

const api = new ApiService();

export default api;
