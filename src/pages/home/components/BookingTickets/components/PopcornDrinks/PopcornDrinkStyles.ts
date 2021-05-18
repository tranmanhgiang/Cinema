import { StyleSheet } from 'react-native';
import { Colors, FontSize, SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    comboContainer: { flexDirection: 'row', borderTopWidth: 1, borderColor: Colors.gray, paddingVertical: 15, paddingHorizontal: 16 },
    actionContainer: { flexDirection: 'row', marginTop: 5 },
    quantity: {
        borderWidth: 1,
        borderColor: Colors.gray,
        marginRight: 30,
        width: 30,
        backgroundColor: Colors.white,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: FontSize.large,
        borderRadius: 8,
    },
    buttonContainer: { flexDirection: 'row' },
    actionButtonIncrease: {
        width: 30,
        height: 5,
        borderRadius: 0,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    actionButtonDecrease: {
        width: 30,
        height: 5,
        borderRadius: 0,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    txtButton: { fontSize: FontSize.large, fontFamily: FONTS.SFProText.BOLD },
});
