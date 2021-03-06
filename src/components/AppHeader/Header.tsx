import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import styles from './HeaderStyles';
import common from '@common/assets/theme/common';

export interface HeaderProps {
    contentTabBar?: React.ReactElement;
    leftTabBar?: React.ReactElement;
    rightTabBar?: React.ReactElement;
    styleHeader?: StyleProp<ViewStyle>;
}
const Header = ({ contentTabBar, leftTabBar, rightTabBar, styleHeader }: HeaderProps): React.ReactElement => {
    return (
        <View style={[styles.header, styleHeader, common.heightHeader]}>
            <View style={styles.leftTabBar}>{leftTabBar}</View>
            <View>{contentTabBar}</View>
            <View style={styles.rightTabBar}>{rightTabBar}</View>
        </View>
    );
};

export default Header;
