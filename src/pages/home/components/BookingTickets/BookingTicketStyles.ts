import { Colors, FontSize } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    itemContainer: {
        marginVertical: 10,
        marginHorizontal: 16,
    },
    leftHeader: {
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
    },
    txtBack: { paddingLeft: 10, fontSize: FontSize.large },
    filmName: {
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.large,
    },
    chooseDate: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    txtDate: { fontSize: FontSize.medium, fontFamily: FONTS.SFProText.BOLD },
    room: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    timeDetail: { flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' },
    timeItem: {
        width: SCREEN_WIDTH / 5,
        borderWidth: 1,
        borderColor: Colors.gray,
        color: Colors.gray,
        textAlign: 'center',
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    timeItemSelected: {
        width: SCREEN_WIDTH / 5,
        backgroundColor: Colors.red,
        color: Colors.white,
        textAlign: 'center',
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    bookingTicket: {
        flexDirection: 'row',
        backgroundColor: Colors.red,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    txtScreen: {
        textAlign: 'center',
        fontSize: FontSize.medium,
    },
    screen: {
        marginTop: 10,
        height: 100,
        borderWidth: 2,
        borderTopColor: Colors.red,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderColor: Colors.whiteSmoke,
    },
    buyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: Colors.whiteMilk,
        height: 70,
        borderRadius: 10,
        marginTop: 100,
    },
    priceSection: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },
    price: {
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.xLarge,
    },
    buy: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.red,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    txtBuy: {
        paddingRight: 5,
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.large,
    },
    payment: {
        padding: 16,
        backgroundColor: Colors.whiteMilk,
        margin: 16,
        borderRadius: 4,
    },
    txtYourBooking: {
        borderBottomWidth: 1,
        borderColor: Colors.gray,
        paddingVertical: 10,
        marginBottom: 10,
        color: Colors.gray,
    },
    txtTotal: {
        borderBottomWidth: 1,
        borderColor: Colors.gray,
        paddingVertical: 10,
        color: Colors.gray,
    },
    priceForPayment: {
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.xxxLarger,
    },
    makePayment: {
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 32,
    },
    txtMakePayment: {
        fontSize: FontSize.xxLarge,
    },
    lineStyle: {
        borderBottomWidth: 1,
        borderColor: Colors.gray,
        width: 100,
    },
    lineStyleFullWidth: {
        borderBottomWidth: 1,
        borderColor: Colors.gray,
        marginBottom: 20,
    },
    inputField: {
        borderWidth: 0.5,
        marginVertical: 5,
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    paymentMethod: {
        paddingHorizontal: 16,
        marginVertical: 10,
        marginHorizontal: 32,
    },
    card: {
        flexDirection: 'row',
    },
    cardPayment: {
        marginRight: 10,
        marginBottom: 10,
        width: 50,
        height: 35,
    },
    cardSelected: {
        marginRight: 10,
        marginBottom: 10,
        width: 52,
        height: 37,
        transform: [{ scale: 1.1 }],
    },
    moreInfoCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cvc: {
        width: 85,
        height: 40,
        marginRight: 10,
        borderWidth: 0.5,
        marginVertical: 5,
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    cvcImage: {
        width: 50,
        height: 32,
    },
    btnField: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        marginHorizontal: 48,
    },
    buttonPayNow: {
        width: 120,
        height: 45,
        borderRadius: 30,
        marginRight: 20,
    },
    txtPayNow: {
        color: Colors.white,
        fontSize: FontSize.medium,
    },
    txtCancel: {
        color: Colors.gray,
    },
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
    successLogo: {
        width: 70,
        height: 70,
    },
    inFoTicket: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    title: {
        color: Colors.gray,
    },
    txtOK: {
        marginRight: 20,
        marginVertical: 20,
    },
});
