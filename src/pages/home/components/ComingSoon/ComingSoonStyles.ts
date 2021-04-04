import { Colors, FontSize } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    image: {
        width: SCREEN_WIDTH / 3,
        height: 150,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    details: { paddingLeft: 5, marginRight: 16, paddingVertical: 15 },
    filmName: { fontFamily: FONTS.SFProText.BOLD, fontSize: FontSize.normal },
    time: { fontFamily: FONTS.SFProText.BOLD },
    descriptions: { paddingRight: 16, width: 2 * (SCREEN_WIDTH / 3) - 21 },
    viewDetail: {
        borderColor: Colors.red,
        borderWidth: 1,
        width: 80,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 5,
        marginTop: 10,
    },
    txtDetail: { color: Colors.red },
});
