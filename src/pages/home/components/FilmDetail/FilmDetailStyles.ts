import { Colors, FontSize } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    itemContainer: {
        backgroundColor: Colors.white,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    leftHeader: {
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
    },
    txtBack: { paddingLeft: 10, fontSize: FontSize.large },
    image: {
        width: SCREEN_WIDTH - 32,
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    details: { paddingLeft: 5, marginHorizontal: 10, paddingVertical: 10 },
    topDescriptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    filmName: {
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.large,
        alignSelf: 'center',
    },
    bookingTicket: {
        flexDirection: 'row',
        backgroundColor: Colors.red,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    txtTicket: { color: Colors.white, paddingRight: 5 },
    time: { fontFamily: FONTS.SFProText.BOLD },
    descriptions: { fontSize: FontSize.medium },
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
    fieldInfo: { flexDirection: 'row', marginVertical: 10, paddingLeft: 16 },
});
