import { all, takeLatest } from 'redux-saga/effects';

import { loginSuccessAction, logoutAction } from './actions';

function* loginWatcher() {
    try {
    } catch (error) {
        console.log('error', error);
    }
}

function* logoutWatcher() {
    try {
    } catch (error) {
        console.log('error', error);
    }
}

export function* authSaga() {
    yield all([takeLatest(loginSuccessAction, loginWatcher), takeLatest(logoutAction, logoutWatcher)]);
}