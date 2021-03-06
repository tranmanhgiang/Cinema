import { Colors, FontSize } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flexGrow: 1 },
    background: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: Colors.black,
    },
    text: {
        color: Colors.gray,
        fontSize: FontSize.xxxLarger,
        fontFamily: FONTS.SFProText.BOLD,
    },
    bottomText: {
        color: Colors.white,
    },
    linearGradient: {
        flex: 1,
    },
    logoField: { flex: 3, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 },
    imageField: { flex: 2, justifyContent: 'flex-end', alignItems: 'center' },
    phone_number: { flex: 1, },
    logo: {
        width: 40,
        height: 45,
        marginBottom: 15,
    },
    welcome: { color: Colors.red, fontFamily: FONTS.SFProText.MEDIUM, fontSize: FontSize.xxxLarger },
    description: { color: Colors.white, fontFamily: FONTS.SFProText.REGULAR },
    buttonField: { flex: 1, justifyContent: 'center' },
    buttonGetStarted: {
        marginHorizontal: 32,
        marginVertical: 4,
    },
    txtGetStarted: {
        fontFamily: FONTS.SFProText.BOLD,
        color: Colors.white,
        fontSize: FontSize.large,
    },
    buttonSignIn: {
        backgroundColor: Colors.red,
        marginHorizontal: 32,
        marginVertical: 10,
        borderRadius: 30,
    },
    txtSignIn: {
        fontFamily: FONTS.SFProText.MEDIUM,
        color: Colors.white,
        fontSize: FontSize.large,
    },
    buttonSignUp: {
        backgroundColor: Colors.red,
        marginHorizontal: 32,
        marginTop: 4,
        marginBottom: 20,
        borderRadius: 30,
    },
    txtSignUp: {
        fontFamily: FONTS.SFProText.MEDIUM,
        color: Colors.white,
        fontSize: FontSize.large,
    },
});
