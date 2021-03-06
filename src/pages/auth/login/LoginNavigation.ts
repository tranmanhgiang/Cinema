import { ScenesKey } from '@common/constants';
import { NavigationProps } from '@common/types';

export const goToLogin = (navigation: NavigationProps) => {
    navigation.navigate(ScenesKey.LOGIN);
};
