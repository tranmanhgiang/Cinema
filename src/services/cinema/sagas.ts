import { all, takeLatest, put } from 'redux-saga/effects';
import { checkout, getSelectedSeats, resetCheckout } from './actions';

function* checkoutWatcher() {
    try {
        yield put(checkout());
    } catch (error) {
        console.log('error', error);
    }
}

export function* ticketSaga() {
    yield all([takeLatest(getSelectedSeats, checkoutWatcher), takeLatest(resetCheckout, checkoutWatcher)]);
}
