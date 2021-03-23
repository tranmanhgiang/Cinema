import { Colors, FontSize, SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    contentTabBar: {
        fontSize: FontSize.xLarge,
        fontFamily: FONTS.SFProText.BOLD,
    },
    overViewContainer: {
        paddingTop: 10,
        backgroundColor: Colors.whiteMilk,
    },
    overView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    imageView: { width: 60, height: 60, resizeMode: 'cover', borderRadius: 30 },
    back: { position: 'absolute', left: 10, top: 10 },
    avatar: {
        backgroundColor: Colors.whiteSmoke,
        borderRadius: 30,
    },
    iconPerson: { justifyContent: 'center', padding: 7 },
    iconCamera: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 40,
        backgroundColor: Colors.gray,
        padding: 4,
        borderRadius: 8,
    },
    txtInfo: {
        justifyContent: 'center',
        paddingLeft: 5,
    },
    qrCode: {
        justifyContent: 'center',
        paddingTop: 7,
    },
    exclamationIcon: {
        width: 15,
        height: 15,
    },
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 20,
    },
    tabItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    middleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingHorizontal: 15,
        borderColor: Colors.gray,
    },
    txtItem: {
        textAlignVertical: 'center',
    },
    expenditureContainer: {
        paddingBottom: 20,
        marginTop: 10,
        backgroundColor: Colors.white,
    },
    expenditureSection: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 16 },
    expenditure: {
        flexDirection: 'row',
    },
    progressMember: {
        paddingVertical: 15,
    },
    supportSection: {
        paddingVertical: 10,
    },
    support: {
        backgroundColor: Colors.white,
        marginVertical: 1,
        paddingVertical: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    supportField: {
        fontSize: FontSize.mediumNormal,
    },
    infoSupport: {
        color: Colors.orange,
        fontSize: FontSize.mediumNormal,
    },
    buttonLogout: { backgroundColor: Colors.white, marginBottom: 10 },
    txtLogout: { color: Colors.redOrange, fontSize: FontSize.medium, fontFamily: FONTS.SFProText.BOLD },
    imageCover: {
        backgroundColor: Colors.white,
        resizeMode: 'cover',
        width: SCREEN_WIDTH,
        height: 200,
    },
    avtImage: { width: 60, height: 60, borderRadius: 30 },
    information: { backgroundColor: Colors.white, marginBottom: 10 },
    name: { color: Colors.white, fontSize: FontSize.medium },
    userNameContainer: { flexDirection: 'row', paddingVertical: 2, borderBottomWidth: 0.5, borderColor: Colors.gray },
    infoItem: { flexDirection: 'row', paddingVertical: 15, borderBottomWidth: 0.5, borderColor: Colors.gray },
    infoLastItem: { flexDirection: 'row', paddingVertical: 15 },
    userName: {
        width: SCREEN_WIDTH / 3,
        textAlign: 'center',
        color: Colors.black,
        fontSize: FontSize.medium,
        fontFamily: FONTS.SFProText.MEDIUM,
        alignSelf: 'center',
    },
    title: { width: SCREEN_WIDTH / 3, textAlign: 'center', color: Colors.black, fontSize: FontSize.medium, fontFamily: FONTS.SFProText.MEDIUM },
    info: { width: (2 * SCREEN_WIDTH) / 3, color: Colors.gray, fontSize: FontSize.normal },
    text: { color: Colors.gray, fontSize: FontSize.normal },
    btnField: { alignItems: 'center' },
    buttonEditProfile: { borderRadius: 30, width: 200, height: 45 },
    txtEditProfile: { color: Colors.white, fontSize: FontSize.medium },
});
