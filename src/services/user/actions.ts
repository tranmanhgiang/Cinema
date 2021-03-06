import { createAction } from 'redux-actions';
import { loadableDataActions } from '@common/utils/loadableData';

const ns = 'user/';

export const ActionsTypes = {
    getCurrentUser: `${ns}GET_CURRENT_USER`,
    getUserSettings: `${ns}GET_USER_SETTINGS`,
};

export const getCurrentUser = createAction(ActionsTypes.getCurrentUser);
export const getUserSettings = loadableDataActions<undefined, any>(ActionsTypes.getUserSettings);
