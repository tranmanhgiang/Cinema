import { ScenesKey } from '@common/constants';
import { NavigationProps } from '@common/types';

export const goToSignUp = (navigation: NavigationProps) => {
    navigation.navigate(ScenesKey.SIGN_UP);
};
