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
    EDIT_INFORMATION = 'EditInformation',
    TABS_PAGE = 'TabsPage',
    VERIFY_ACCOUNT = 'VerifyAccount',
    RESET_PASSWORD = 'ResetPassword',
    SET_NEW_PASSWORD = 'SetNewPassword',
    CHOOSE_SEATS = 'ChooseSeats',
    PAYMENT = 'Payment',
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
    VISA: require('@common/assets/images/visa.png'),
    MASTER_CARD: require('@common/assets/images/masterCard.png'),
    PAY_PAL: require('@common/assets/images/paypal.png'),
    CVC: require('@common/assets/images/cvc.png'),
    SUCCESS: require('@common/assets/images/success.png'),
};

export const VERIFY_ACCOUNT_TYPE_SCREEN = {
    SIGN_UP: 'SignUp',
    RESET_PASSWORD: 'ResetPassword',
};

export const FILM_DETAIL_TYPE_SCREEN = {
    CAN_BOOK_TICKET: 'CanBookTicket',
    CAN_NOT_BOOK_TICKET: 'CanNotBookTicket',
};