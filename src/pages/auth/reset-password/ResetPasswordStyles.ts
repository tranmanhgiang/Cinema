import { Colors, FontSize } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: Colors.whiteSmoke
    },
    text: {
        color: Colors.red,
        fontSize: FontSize.medium,
        paddingLeft: 32,
        paddingBottom: 10,
    },
    logoField: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: {
        color: Colors.red,
        fontSize: FontSize.xxxLarger,
        fontFamily: FONTS.SFProText.BOLD,
    },
    buttonField: { flex: 4, justifyContent: 'flex-end' },
    buttonSubmit: {
        backgroundColor: Colors.red,
        borderRadius: 30,
        marginHorizontal: 32,
        marginTop: 10,
    },
    txtSubmit: {
       fontFamily: FONTS.SFProText.BOLD,
        color: Colors.white,
        fontSize: FontSize.large,
    },
    inputBox: { paddingVertical: 2, marginHorizontal: 32, marginVertical: 10 },
    inputTextEmail: {
        flex: 1,
        paddingHorizontal: 15,
        height: 54,
        borderColor: Colors.veryBrightGrey,
        borderWidth: 1,
        borderRadius: 30,
        color: Colors.veryBrightGrey,
        fontFamily: FONTS.SFProText.REGULAR,
        fontSize: FontSize.normal,
    },
    inputErrorText: {
        fontFamily: FONTS.SFProText.REGULAR,
        fontSize: FontSize.normal,
    }
});
