import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, ViewStyle, StyleProp } from 'react-native';

export enum VectorIconName {
    FontAweSome = 'FontAweSome',
    Ionicons = 'Ionicons',
    Entypo = 'Entypo',
    Foundation = 'Foundation',
    MaterialIcons = 'MaterialIcons',
}

export interface IconProps {
    type: VectorIconName;
    name: string | undefined;
    size: number;
    color: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const Icon = ({ type, name = '', size, color, containerStyle = {} }: IconProps) => {
    return (
        <View style={containerStyle}>
            {type === VectorIconName.Ionicons && <Ionicons name={name} size={size} color={color} />}
            {type === VectorIconName.FontAweSome && <FontAweSome name={name} size={size} color={color} />}
            {type === VectorIconName.Entypo && <Entypo name={name} size={size} color={color} />}
            {type === VectorIconName.Foundation && <Foundation name={name} size={size} color={color} />}
            {type === VectorIconName.MaterialIcons && <MaterialIcons name={name} size={size} color={color} />}
        </View>
    );
};

export default Icon;