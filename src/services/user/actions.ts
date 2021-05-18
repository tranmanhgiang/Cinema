import { createAction } from 'redux-actions';
import { loadableDataActions } from '@common/utils/loadableData';

const ns = 'user/';

export const ActionsTypes = {
    getCurrentUser: `${ns}GET_CURRENT_USER`,
    getUserSettings: `${ns}GET_USER_SETTINGS`,
    getProfile: `${ns}GET_PROFILE`,
    bookTicketHistory: `${ns}BOOK_TICKET_HISTORY`,
    bookTicketHistorySuccess: `${ns}BOOK_TICKET_HISTORY_SUCCESS`,
};

export interface PayloadBookTicketHistory {
    history: any[];
}

export const getCurrentUser = createAction(ActionsTypes.getCurrentUser);
export const getUserSettings = loadableDataActions<undefined, any>(ActionsTypes.getUserSettings);
export const getCurrentUserSuccess = createAction(ActionsTypes.getProfile);
export const getBookTicketHistory = createAction(ActionsTypes.bookTicketHistory);
export const getBookTicketHistorySuccess = createAction<PayloadBookTicketHistory>(ActionsTypes.bookTicketHistorySuccess);
