import { combineReducers } from 'redux';
import user, { UserState } from '../../services/user/reducer';

export interface GlobalState {
    user: UserState;
}

const rootReducer = combineReducers<GlobalState>({
    user,
});

export default rootReducer;
