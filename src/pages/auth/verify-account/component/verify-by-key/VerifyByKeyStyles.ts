import { Colors } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginVertical: 20,
    },
    subTitle: {
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    codeFieldRoot: { marginTop: 20, maxWidth: 325 },
    cell: {
        margin: 2,
        width: 49,
        height: 49,
        lineHeight: 47,
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: Colors.red,
    },
});
