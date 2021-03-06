import { ScenesKey } from '@common/constants';
import { NavigationProps } from '@common/types';

export const goToVerifyAccount = (navigation: NavigationProps) => {
    navigation.navigate(ScenesKey.VERIFY_ACCOUNT);
};

export const goToDashboard = (navigation: NavigationProps) => {
    navigation.reset({
        index: 0,
        routes: [{ name: ScenesKey.APP }],
    });
};
