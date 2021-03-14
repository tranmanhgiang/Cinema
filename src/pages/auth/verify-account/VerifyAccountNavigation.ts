import { ScenesKey } from '@common/constants';
import { NavigationProps } from '@common/types';

export const goToVerifyAccount = (navigation: NavigationProps, params: any) => {
    navigation.navigate(ScenesKey.VERIFY_ACCOUNT, params);
};

export const goToDashboard = (navigation: NavigationProps) => {
    navigation.reset({
        index: 0,
        routes: [{ name: ScenesKey.APP }],
    });
};
