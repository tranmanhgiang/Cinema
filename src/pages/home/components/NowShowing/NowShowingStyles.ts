import { StyleSheet } from "react-native";
import { Colors, FontSize, SCREEN_WIDTH } from "@common/assets/theme/variables";
import { FONTS } from "@common/constants";

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export default StyleSheet.create({
    container: { flexDirection: "row", flexWrap: "wrap" },
    image: {
        width: SCREEN_WIDTH / 2 - 32,
        height: 200,
        borderRadius: 10,
    },
    infoFilm: { flexDirection: "row", paddingTop: 5 },
    leftInfo: { flex: 1 },
    filmName: { fontSize: FontSize.normal, fontFamily: FONTS.SFProText.BOLD },
    bookingTicket: {
        flexDirection: "row",
        backgroundColor: Colors.red,
        padding: 2,
        flex: 1,
        borderRadius: 20,
        alignItems: "center",
    },
    txtTicket: { color: Colors.white, paddingRight: 5 },
});
