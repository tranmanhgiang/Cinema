import { Colors, FontSize } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    appName: {
        color: Colors.red,
        fontSize: FontSize.xxLarge,
        fontFamily: FONTS.SFProText.BOLD,
    },
    text: {
        color: Colors.red,
        fontSize: FontSize.xxLarge,
        paddingBottom: 10,
        paddingLeft: 32,
        fontFamily: FONTS.SFProText.BOLD,
    },
    bottomText: {
        fontFamily: FONTS.SFProText.MEDIUM,
        color: Colors.white,
        fontSize: FontSize.normal,
        textAlign: 'center',
    },
    bottomTextBold: {
        fontFamily: FONTS.SFProText.BOLD,
    },
    logoField: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    logo: {
        width: 254,
        height: 100,
        resizeMode: 'contain',
    },
    buttonField: { flex: 4, justifyContent: 'flex-end' },
    buttonSignIn: {
        flex: 1,
        backgroundColor: Colors.red,
        borderRadius: 30,
        marginHorizontal: 32,
        marginBottom: 50,
    },
    txtSignUp: {
        fontFamily: FONTS.SFProText.BOLD,
        color: Colors.white,
        fontSize: FontSize.large,
    },
    section: { flex: 1, marginBottom: 30, backgroundColor: Colors.whiteMilk, marginHorizontal: 32, paddingBottom: 20, borderRadius: 8 },
    txtSection: { color: Colors.white, paddingLeft: 32, fontSize: FontSize.large, fontFamily: FONTS.SFProText.BOLD },
    inputBox: { paddingVertical: 2, marginHorizontal: 32 },
    inputTextSignUp: {
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
