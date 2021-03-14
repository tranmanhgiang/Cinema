import { Colors } from '@common/assets/theme/variables';
import React from 'react';
import { ActivityIndicator, StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

import styles from './ButtonStyles';

export interface ButtonProps {
    children?: React.ReactNode;
    onPress: () => void;
    loading?: boolean;
    buttonContainerStyle?: StyleProp<ViewStyle>;
}

export interface ButtonClass {
    [index: string]: object;
}

type Props = ButtonProps & TouchableOpacityProps;

const Button = ({ children, loading = false, onPress, buttonContainerStyle }: Props): React.ReactElement => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, buttonContainerStyle]} onPress={onPress}>
            {loading && children && <ActivityIndicator color={Colors.white} />}
            {!loading && children}
        </TouchableOpacity>
    );
};

export default Button;
