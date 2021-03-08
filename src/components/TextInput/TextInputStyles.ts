import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        overflow: 'hidden',
    },
    label: {},
    textInput: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        paddingRight: 8,
    },
    textInputError: {
        borderBottomWidth: 2,
    },
    touchableEye: {
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    iconEye: {},
    labelInput: {
        paddingBottom: 4,
    },
    errText: { paddingTop: 4, color: 'red' },
});
