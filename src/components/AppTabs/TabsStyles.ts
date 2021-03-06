import { StyleSheet } from 'react-native';
import { FONTS } from '@common/constants';
import { Colors, FontSize } from '@common/assets/theme/variables';
import { isIphoneX } from '@common/utils/detectPlatform';

export default StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: Colors.white,
        paddingBottom: isIphoneX() ? 24 : 15,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    tabBarButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabTitle: { fontFamily: FONTS.SFProText.REGULAR, fontSize: FontSize.small11, color: Colors.gray, textAlign: 'center', marginLeft: 8 },
});