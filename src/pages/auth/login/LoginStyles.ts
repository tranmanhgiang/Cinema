import { Colors, FontSize } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: Colors.whiteSmoke,
    },
    appName: {
        color: Colors.red,
        fontSize: FontSize.xxLarge,
        fontFamily: FONTS.SFProText.BOLD,
    },
    text: {
        color: Colors.red,
        fontSize: FontSize.xxLarge,
        paddingLeft: 32,
        paddingBottom: 10,
    },
    bottomText: {
        fontFamily: FONTS.SFProText.MEDIUM,
        color: Colors.veryBrightGrey,
        fontSize: FontSize.normal,
        textAlign: 'center',
    },
    makerSignUp: { color: Colors.red },
    bottomTextBold: {
        fontFamily: FONTS.SFProText.BOLD,
    },
    logoField: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    logo: {
        width: 254,
        height: 100,
        resizeMode: 'contain',
    },
    buttonField: { flex: 2, justifyContent: 'flex-end' },
    buttonSignIn: {
        backgroundColor: Colors.red,
        borderRadius: 30,
        marginHorizontal: 32,
        marginTop: 30,
        marginBottom: 50,
    },
    txtSignIn: {
        fontFamily: FONTS.SFProText.BOLD,
        color: Colors.white,
        fontSize: FontSize.large,
    },
    inputBox: { paddingVertical: 2, marginHorizontal: 32, marginVertical: 10 },
    inputTextLogin: {
        flex: 1,
        paddingHorizontal: 5,
        height: 54,
        borderColor: Colors.veryBrightGrey,
        borderBottomWidth: 1,
        borderRadius: 4,
        color: Colors.veryBrightGrey,
        fontFamily: FONTS.SFProText.REGULAR,
        fontSize: FontSize.normal,
    },
    inputErrorText: {
        fontFamily: FONTS.SFProText.REGULAR,
        fontSize: FontSize.normal,
    },
    forgotPassword: {
        fontFamily: FONTS.SFProText.MEDIUM,
        color: Colors.veryBrightGrey,
        fontSize: FontSize.normal,
        textAlign: 'center',
        marginTop: 5,
    },
    signUpField: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 15,
    },
});
