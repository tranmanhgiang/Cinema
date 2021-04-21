import { ReducerFactory } from 'redux-actions-ts-reducer';

import { getCurrentUser, getUserSettings, getCurrentUserSuccess } from './actions';

export interface DefaultState {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
}

const defaultState: DefaultState = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
};

class State {
    userProfile: DefaultState = defaultState;
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
    .toReducer();

export default reducer;

export { State as UserState };
