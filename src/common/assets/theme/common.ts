import { FONTS } from '@common/constants';
import { StyleSheet } from 'react-native';
import { isIphoneX, isAndroid } from '../../../common/utils/detectPlatform';
import { Colors } from './variables';

export default StyleSheet.create({
    paddingTopHeader: { paddingTop: isIphoneX() ? 32 : isAndroid ? 0 : 20 },
    heightHeader: {
        minHeight: isIphoneX() ? 84 : isAndroid ? 44 : 64,
    },
    flex1: {
        flex: 1,
    },
    mt5: {
        marginTop: 5,
    },
    ml8: {
        marginLeft: 8,
    },
    mb20: {
        marginBottom: 20,
    },
    mx5: {
        marginHorizontal: 5,
    },
    mx10: {
        marginHorizontal: 10,
    },
    pr15: {
        paddingRight: 15,
    },
    pr20: {
        paddingRight: 20,
    },
    py15: {
        paddingVertical: 15,
    },
    py20: {
        paddingVertical: 20,
    },
    my10: {
        marginVertical: 10,
    },
    my15: {
        marginVertical: 15,
    },
    backBtn: {
        minWidth: 60,
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerRightBtn: {
        minWidth: 60,
        minHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexColumn: {
        flexDirection: 'column',
    },
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexRowAround: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    justifyContentBetween: {
        justifyContent: 'space-between',
    },
    justifyContentAround: {
        justifyContent: 'space-around',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    flexRowStart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textDefault: {
        fontFamily: FONTS.SFProText.REGULAR,
        paddingBottom: 18,
    },
    paddingTopAndroid: {
        paddingTop: 20,
    },
    paddingTopLandscape: {
        paddingTop: 0,
    },
    shadow: {
        elevation: 3,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
    },
});

export const OptionToast = {
    position: 30,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: Colors.red,
};

export const OptionToastSuccess = {
    position: 30,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: Colors.lawnGreen,
};
