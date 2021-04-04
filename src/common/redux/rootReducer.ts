import ticket, { TicketState } from '@services/cinema/reducer';
import { combineReducers } from 'redux';
import user, { UserState } from '@services/user/reducer';
import auth, { AuthState } from '@services/auth/reducer';

export interface GlobalState {
    auth: AuthState;
    user: UserState;
    ticket: TicketState;
}

const rootReducer = combineReducers<GlobalState>({
    auth,
    user,
    ticket,
});

export default rootReducer;
