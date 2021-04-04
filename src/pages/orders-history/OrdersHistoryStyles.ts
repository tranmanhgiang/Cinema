import { Colors, FontSize } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    title: {
        color: Colors.black,
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.xLarge,
        paddingHorizontal: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    image: {
        width: SCREEN_WIDTH / 3,
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    details: { paddingLeft: 5, marginRight: 16, paddingVertical: 15 },
    exceedDate: { textAlign: 'right', color: Colors.red, fontFamily: FONTS.SFProText.BOLD },
    notExceedDate: { textAlign: 'right', color: Colors.lawnGreen, fontFamily: FONTS.SFProText.BOLD },
    filmName: { fontFamily: FONTS.SFProText.BOLD, fontSize: FontSize.xLarge },
    date: { fontSize: FontSize.small },
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
    price: { color: Colors.red, fontFamily: FONTS.SFProText.BOLD },
    modalContainer: {
        backgroundColor: Colors.white,
        borderRadius: 8,
    },
    headerModal: {
        backgroundColor: Colors.red,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingVertical: 15,
        textAlign: 'center',
        color: Colors.white,
        fontSize: FontSize.xLarge,
    },
    guide: {
        textAlign: 'center',
        fontSize: FontSize.medium,
    },
    inFoTicket: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    txtOK: {
        marginRight: 20,
        marginVertical: 20,
    },
    titleInfo: {
        color: Colors.black,
        fontFamily: FONTS.SFProText.BOLD,
    },
});
