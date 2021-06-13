import { ToppingType } from '@common/api/ApiTypes';
import { SeatStatus } from '@common/types';
import { ReducerFactory } from 'redux-actions-ts-reducer';
import { addToppingSuccess, checkout, getSelectedSeats, resetCheckout } from './actions';

export interface DefaultState {
    totalSeats: number;
    seats: any[];
    price: number;
    topping: ToppingType[];
    toppingPrice: number;
}

const defaultState: DefaultState = {
    totalSeats: 0,
    seats: [],
    price: 0,
    topping: [],
    toppingPrice: 0,
};

class State {
    totalSeats = defaultState.totalSeats;
    seats = defaultState.seats;
    price = defaultState.price;
    topping = defaultState.topping;
    toppingPrice = defaultState.toppingPrice;
}

const reducer = new ReducerFactory(new State())
    .addReducer(
        getSelectedSeats,
        (state: any, action: any): State => {
            let newPrice = 0;
            action.payload.seats.map((seat: SeatStatus) => {
                newPrice += seat.name.includes('V_') ? 90000 : 75000;
            });
            return {
                ...state,
                totalSeats: action.payload.seats.length,
                seats: action.payload.seats,
                price: newPrice,
            };
        }
    )
    .addReducer(
        addToppingSuccess,
        (state: any, action: any): State => {
            let newToppingPrice = 0;
            action.payload.topping.map((item: ToppingType) => {
                newToppingPrice += item.price * item.quantity;
            });

            return {
                ...state,
                topping: action.payload.topping,
                toppingPrice: newToppingPrice,
            };
        }
    )
    .addReducer(
        checkout,
        (state: any): State => {
            return {
                ...state,
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
                topping: defaultState.topping,
                toppingPrice: defaultState.toppingPrice,
            };
        }
    )
    .toReducer();

export default reducer;

export { State as TicketState };
