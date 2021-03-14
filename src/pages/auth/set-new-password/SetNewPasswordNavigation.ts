import { ScenesKey } from '@common/constants';

export const goToSetNewPassword = (navigation: any, params: any) => {
    navigation.navigate(ScenesKey.SET_NEW_PASSWORD, params);
};
