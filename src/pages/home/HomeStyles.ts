import { Colors, FontSize } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    txtLeftTabBar: {
        fontSize: FontSize.xLarge,
        fontFamily: FONTS.SFProText.BOLD,
    },
    imageView: { width: 60, height: 60, resizeMode: 'cover', borderRadius: 30 },
    avatar: {
        backgroundColor: Colors.whiteSmoke,
        borderRadius: 30,
    },
    iconPerson: { justifyContent: 'center', padding: 7 },
    iconCamera: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: Colors.gray,
        padding: 4,
        borderRadius: 8,
    },
    section: { marginVertical: 15 },
    title: {
        color: Colors.red,
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.xxLarge,
        textDecorationLine: 'underline',
        marginBottom: 15,
        paddingHorizontal: 16,
    },
});
