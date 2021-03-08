import Config from 'react-native-config';

export const TOKEN_STORAGE_KEY = 'CINEMA_USER_TOKEN';

export enum ScenesKey {
    INIT = 'Init',
    AUTH = 'Auth',
    APP = 'App',
    LOGIN = 'Login',
    SIGN_UP = 'SignUp',
    START = 'Start',
    HOME = 'Home',
    FILM_DETAIL = 'FilmDetail',
    BOOKING_TICKETS = 'BookingTickets',
    SPECIAL_OFFERS = 'SpecialOffers',
    ORDERS_HISTORY = 'OrdersHistory',
    PROFILE = 'Profile',
    TABS_PAGE = 'TabsPage',
    VERIFY_ACCOUNT = 'VerifyAccount',
    RESET_PASSWORD = 'ResetPassword',
    SET_NEW_PASSWORD = 'SetNewPassword',
    SCREEN_1 = 'Screen 1',
    SCREEN_2 = 'Screen 2',
    TEST = 'TEST',
}
export const AppConstants = {
    ENVIRONMENT: Config.ENV,
    API_LOGIN_URL: Config.API_LOGIN_URL,
    API_URL: Config.API_URL,
    LOGIN_WEB_LINK: Config.LOGIN_WEB_LINK,
};
export const FONTS = {
    SFProText: {
        BOLD: 'SFProText-Bold',
        REGULAR: 'SFProText-Regular',
        MEDIUM: 'SFProText-Medium',
    },
};
export const ImageUrls = {
    BACKGROUND: require('@common/assets/images/startBackground.png'),
    LOGO: require('@common/assets/images/logo.png'),
    BACK: require('@common/assets/images/back.png'),
};