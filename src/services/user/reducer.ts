import { ReducerFactory } from 'redux-actions-ts-reducer';

import { getCurrentUser, getUserSettings } from './actions';

export interface DefaultState {
    username: string;
}

const defaultState: DefaultState = {
    username: 'No Name',
};

class State {
    defaultState: DefaultState = defaultState;
}

const reducer = new ReducerFactory(new State())
    .addReducer(
        getCurrentUser,
        (state: any): State => {
            return {
                ...state,
                defaultState: { username: '' },
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
                defaultState: { username: '' },
            };
        }
    )
    .toReducer();

export default reducer;

export { State as UserState };
