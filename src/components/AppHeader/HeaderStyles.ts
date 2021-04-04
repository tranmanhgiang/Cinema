import { Colors } from '@common/assets/theme/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 5,
        backgroundColor: Colors.whiteMilk,
    },
    leftTabBar: {
        minWidth: 24,
        position: 'relative',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightTabBar: {
        minWidth: 24,
        position: 'relative',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
