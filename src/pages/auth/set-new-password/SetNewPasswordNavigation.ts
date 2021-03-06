import { ScenesKey } from '@common/constants';
import { NavigationProps } from '@common/types';

export const goToSetNewPassword = (navigation: NavigationProps, params: any) => {
    navigation.navigate(ScenesKey.SET_NEW_PASSWORD, params);
};
