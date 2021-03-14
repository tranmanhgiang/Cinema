import { ScenesKey } from '@common/constants';

export const goToStart = (navigation: any) => {
    navigation.reset({
        index: 0,
        routes: [{ name: ScenesKey.START }],
    });
};
