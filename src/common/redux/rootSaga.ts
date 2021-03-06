import { all, fork } from 'redux-saga/effects';
import { userSaga } from '@services/user/sagas';

export default function* rootSaga() {
    yield all([fork(userSaga)]);
}
