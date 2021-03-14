import { ReducerFactory } from "redux-actions-ts-reducer";
import AsyncStorage from "@react-native-community/async-storage";
import {
    loginSuccessAction,
    logoutAction,
    verificationCodeSuccessAction,
    signUpSuccessAction,
} from "./actions";
import { PersistConfig, persistReducer } from "redux-persist";

export interface AuthStateProps {
    username: string;
    token: string;
}

const defaultState: AuthStateProps = {
    username: "",
    token: "",
};

class State {
    username = defaultState.username;
    token = defaultState.token;
}

const reducer = new ReducerFactory(new State())
    .addReducer(
        loginSuccessAction,
        (state, action): State => {
            return {
                ...state,
                username: action.payload.username,
            };
        }
    )
    .addReducer(
        signUpSuccessAction,
        (state, action): State => {
            return {
                ...state,
                username: action.payload.username,
            };
        }
    )
    .addReducer(
        logoutAction,
        (): State => {
            return {
                ...defaultState,
            };
        }
    )
    .addReducer(
        verificationCodeSuccessAction,
        (state, action): State => {
            return {
                ...state,
                token: action.payload.token,
            };
        }
    )
    .toReducer();

const persistConfig: PersistConfig<State> = {
    storage: AsyncStorage,
    key: "auth",
    whitelist: ["token"],
};

export default persistReducer(persistConfig, reducer);

export { State as AuthState };
