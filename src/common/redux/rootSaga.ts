import { all, fork } from 'redux-saga/effects';
import { userSaga } from '@services/user/sagas';
import { ticketSaga } from '@services/cinema/sagas';
import { authSaga } from '@services/auth/sagas';

export default function* rootSaga() {
    yield all([fork(authSaga), fork(userSaga), fork(ticketSaga)]);
}
