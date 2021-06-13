import { Colors, FontSize } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    header: {
        backgroundColor: Colors.white,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    txtBack: { paddingLeft: 10, fontSize: FontSize.large },
    enterVoucher: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
    },
    inputField: {
        borderWidth: 0.5,
        marginVertical: 5,
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        borderRadius: 4,
        height: 45,
        flex: 1,
    },
    apply: {
        marginLeft: 16,
        paddingHorizontal: 10,
        height: 45,
        marginVertical: 5,
        borderRadius: 4,
    },
    applyDisable: {
        marginLeft: 16,
        paddingHorizontal: 10,
        height: 45,
        marginVertical: 5,
        borderRadius: 4,
        backgroundColor: Colors.gray,
    },
    confirm: {
        width: '100%',
    },
    txtApply: {
        color: Colors.white,
        fontSize: FontSize.medium,
    },
    listVoucher: {
        zIndex: 1,
        marginTop: 5,
        backgroundColor: Colors.white,
    },
    title: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    txtAll: {
        color: Colors.black,
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.medium,
    },
    imgVoucher: {
        width: 120,
        height: 150,
    },
    itemContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderBottomWidth: 0.5,
    },
    itemDisableContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.red,
    },
    voucherDescription: {
        flex: 5,
        marginLeft: 10,
    },
    voucherName: {
        color: Colors.black,
        fontFamily: FONTS.SFProText.BOLD,
    },
    voucherCode: {
        backgroundColor: Colors.red,
        paddingVertical: 2,
        paddingHorizontal: 5,
        maxWidth: 100,
        borderRadius: 30,
    },
    txtVoucherCode: {
        color: Colors.white,
    },
});
