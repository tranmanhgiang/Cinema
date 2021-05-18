import { ReducerFactory } from 'redux-actions-ts-reducer';

import { getCurrentUser, getUserSettings, getCurrentUserSuccess, getBookTicketHistorySuccess } from './actions';

export interface DefaultState {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    purchased: number;
}

export interface DefaultHistory {
    bookTicketHistory: any[];
}

const defaultState: DefaultState = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    purchased: 0,
};

const defaultHistory: DefaultHistory = {
    bookTicketHistory: [],
};

class State {
    userProfile: DefaultState = defaultState;
    history: DefaultHistory = defaultHistory;
}

const reducer = new ReducerFactory(new State())
    .addReducer(
        getCurrentUser,
        (state: any): State => {
            return {
                ...state,
                userProfile: defaultState,
            };
        }
    )
    .addReducer(
        getCurrentUserSuccess,
        (state: any, action: any): State => {
            return {
                ...state,
                userProfile: action.payload,
            };
        }
    )
    .addReducer(
        getUserSettings.success,
        (state: any, action: any): State => {
            return {
                ...state,
            };
        }
    )

    .addReducer(
        getUserSettings.error,
        (state: any, action: any): State => {
            return {
                ...state,
                userProfile: defaultState,
            };
        }
    )

    .addReducer(
        getBookTicketHistorySuccess,
        (state: any, action: any): State => {
            return {
                ...state,
                history: action.payload,
            };
        }
    )
    .toReducer();

export default reducer;

export { State as UserState };
