import { Colors } from '@common/assets/theme/variables';
import { FONTS } from '@common/constants';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './TabsStyles';

const Tab = ({ onPress, icon, labelFocus }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.tabBarButton}>
            {icon}
            <Text style={{ fontFamily: FONTS.SFProText.BOLD, color: Colors.red }}>{labelFocus}</Text>
        </TouchableOpacity>
    );
};

export default Tab;