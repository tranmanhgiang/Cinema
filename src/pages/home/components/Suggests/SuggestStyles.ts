import { Colors, FontSize } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: ITEM_WIDTH,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: 300,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    filmName: { textAlign: 'center', fontSize: FontSize.xLarge, fontFamily: FONTS.SFProText.BOLD },
});
