import { createAction } from 'redux-actions';

const ns = 'ticket/';

export const ActionsTypes = {
    getSelectedSeats: `${ns}GET_SELECTED_SEATS`,
    checkout: `${ns}CHECK_OUT`,
    resetCheckout: `${ns}RESET_CHECK_OUT`,
};

export interface PayloadSelectedSeats {
    seats: number[];
}

export const getSelectedSeats = createAction<PayloadSelectedSeats>(ActionsTypes.getSelectedSeats);
export const checkout = createAction(ActionsTypes.checkout);
export const resetCheckout = createAction(ActionsTypes.resetCheckout);
