import { Colors } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: { paddingTop: 80, flex: 1 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: Colors.veryBrightGrey,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    changeOptionTitle: {
        textDecorationLine: 'underline',
        color: Colors.veryBrightGrey,
    },
    bottomTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
    btn_login: {
        marginTop: 30,
        marginHorizontal: 80,
        borderRadius: 5,
        marginVertical: 50,
    },
    txtVerify: {
        color: Colors.white,
    },
});
