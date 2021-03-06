import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getUserSettings } from './actions';
import api from '@common/api';

function* userSettingsWatcher() {
    console.log('test');
    try {
        const responseData = yield call(api.user.getUserSettings);
        yield put(getUserSettings.success(responseData));
    } catch (error) {
        console.log('error', error);
        yield put(getUserSettings.error(error));
    }
}

export function* userSaga() {
    yield all([takeLatest(getUserSettings.request, userSettingsWatcher)]);
}
