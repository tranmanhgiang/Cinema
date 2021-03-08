import { Colors, FontSize } from "@common/assets/theme/variables";
import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "@common/assets/theme/variables";
import { FONTS } from "@common/constants";

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    itemContainer: {
        marginVertical: 10,
        marginHorizontal: 16,
    },
    leftHeader: {
        flexDirection: "row",
        borderRadius: 20,
        alignItems: "center",
    },
    txtBack: { paddingLeft: 10, fontSize: FontSize.large },
    filmName: {
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.large,
    },
    chooseDate: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
    txtDate: { fontSize: FontSize.medium, fontFamily: FONTS.SFProText.BOLD },
    timeDetail: { flexDirection: "row", justifyContent: 'space-evenly', flexWrap: 'wrap' },
    timeItem: {
        width: SCREEN_WIDTH / 5,
        borderWidth: 1,
        borderColor: Colors.gray,
        color: Colors.gray,
        textAlign: "center",
        paddingVertical: 5,
        marginTop: 10,
        borderRadius: 10,
    },
    timeItemSelected: {
        width: SCREEN_WIDTH / 5,
        backgroundColor: Colors.red,
        color: Colors.white,
        textAlign: "center",
        paddingVertical: 5,
        marginTop: 10,
        borderRadius: 10,
    },
    bookingTicket: {
        flexDirection: "row",
        backgroundColor: Colors.red,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
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
        borderColor: Colors.whiteSmoke
    },
    buyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: Colors.whiteMilk,
        height: 70,
        borderRadius: 10,
    },
    priceSection: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },
    price: {
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.xLarge
    },
    buy: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.red,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    txtBuy: {
        paddingRight: 5,
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.large
    }
});
