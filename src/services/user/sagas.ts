import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getCurrentUser, getCurrentUserSuccess, getUserSettings, getBookTicketHistorySuccess, getBookTicketHistory } from './actions';
import api from '@common/api';

function* userSettingsWatcher() {
    try {
        const responseData = yield call(api.user.getProfile);
        yield put(getCurrentUserSuccess(responseData.data));
    } catch (error) {
        console.log('error', error);
        yield put(getUserSettings.error(error));
    }
}

function* historyWatcher() {
    try {
        const responseData = yield call(api.user.getHistoryBooked);
        yield put(getBookTicketHistorySuccess(responseData.data));
    } catch (error) {
        console.log('error', error);
        yield put(getUserSettings.error(error));
    }
}

export function* userSaga() {
    yield all([takeLatest(getCurrentUser, userSettingsWatcher), takeLatest(getBookTicketHistory, historyWatcher)]);
}
