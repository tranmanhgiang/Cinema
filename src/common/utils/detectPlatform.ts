import { Dimensions, Platform } from 'react-native';

/* Detect device platform */

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export function isIphoneX() {
    const dim = Dimensions.get('window');
    return (
        // This has to be iOS
        Platform.OS === 'ios' &&
        // Check either, iPhone X or XR
        (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
}

export function isIPhoneXSize(dim: { height: number; width: number }) {
    return dim.height === 812 || dim.width === 812;
}

export function isIPhoneXrSize(dim: { height: number; width: number }) {
    return dim.height === 896 || dim.width === 896;
}
