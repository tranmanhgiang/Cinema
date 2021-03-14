import { ReducerFactory } from "redux-actions-ts-reducer";
import { checkout, getSelectedSeats, resetCheckout } from "./actions";

export interface DefaultState {
    totalSeats: number;
    seats: number[];
    price: number;
}

const defaultState: DefaultState = {
    totalSeats: 0,
    seats: [],
    price: 0,
};

class State {
    totalSeats = defaultState.totalSeats;
    seats = defaultState.seats;
    price = defaultState.price;
}

const reducer = new ReducerFactory(new State())
    .addReducer(
        getSelectedSeats,
        (state: any, action: any): State => {
            return {
                ...state,
                totalSeats: action.payload.seats.length,
                seats: action.payload.seats
            };
        }
    )
    .addReducer(
        checkout,
        (state: any): State => {
            return {
                ...state,
                price: state.totalSeats * 50,
            };
        }
    )
    .addReducer(
        resetCheckout,
        (state: any): State => {
            return {
                ...state,
                totalSeats: defaultState.totalSeats,
                seats: defaultState.seats,
                price: defaultState.price,
            };
        }
    )
    .toReducer();

export default reducer;

export { State as TicketState };
