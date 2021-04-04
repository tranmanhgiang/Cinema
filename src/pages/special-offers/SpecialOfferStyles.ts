import { Colors, FontSize } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    container: { flexDirection: 'row', flexWrap: 'wrap' },
    title: {
        color: Colors.black,
        fontFamily: FONTS.SFProText.BOLD,
        fontSize: FontSize.xLarge,
        paddingHorizontal: 16,
    },
    image: {
        width: SCREEN_WIDTH / 2 - 32,
        height: 200,
        borderRadius: 10,
    },
    filmName: { fontFamily: FONTS.SFProText.BOLD, fontSize: FontSize.xLarge },
    infoFilm: { flexDirection: 'row', paddingTop: 5 },
    leftInfo: { flex: 1 },
    imageCover: {
        backgroundColor: Colors.white,
        resizeMode: 'cover',
        width: SCREEN_WIDTH,
        height: 250,
    },
    back: { position: 'absolute', left: 10, top: 10 },
    promoTitle: { backgroundColor: Colors.white, marginHorizontal: 32, borderRadius: 4, marginTop: -50, minHeight: 100 },
    promoCodeField: {
        marginVertical: 10,
        backgroundColor: Colors.red,
        minWidth: 120,
        alignSelf: 'center',
        padding: 2,
        borderRadius: 20,
        alignItems: 'center',
    },
    promoCode: { color: Colors.white },
    titlePromo: { textAlign: 'center', fontFamily: FONTS.SFProText.BOLD, fontSize: FontSize.large },
    date: { fontSize: FontSize.small, textAlign: 'center' },
    description: { paddingHorizontal: 32 },
    txtDescription: { color: Colors.brightGrey, paddingVertical: 20 },
});
