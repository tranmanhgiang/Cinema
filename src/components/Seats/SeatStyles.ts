import { Colors, FontSize, SCREEN_WIDTH } from "@common/assets/theme/variables";
import { FONTS } from "@common/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    seat: {
        borderWidth: 2,
        borderColor: Colors.red,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: SCREEN_WIDTH / 10,
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,
        color: Colors.black,
    },
    seatSelected: {
        borderWidth: 2,
        backgroundColor: Colors.red,
        borderColor: Colors.red,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: SCREEN_WIDTH / 10,
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,
        color: Colors.white,
    },
    room: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    note: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 40,
    },
    noteItem: { flexDirection: "row", alignItems: "center", flex: 1, justifyContent: 'center' },
});
