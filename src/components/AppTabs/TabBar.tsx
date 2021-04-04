import React from 'react';
import { View } from 'react-native';
import Tab from './Tab';
import { ScenesKey } from '@common/constants';
import styles from './TabsStyles';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { Colors } from '@common/assets/theme/variables';

export interface TabBarProps {
    state: any;
    descriptors: any;
    navigation: any;
}

export const TabBar = ({ state, navigation }: TabBarProps) => {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route: any, index: any) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                let icon = <></>;
                let labelFocus: string = '';
                if (route.name === ScenesKey.HOME) {
                    (labelFocus = isFocused ? '•' : ''),
                        (icon = <Icon type={VectorIconName.FontAweSome} name="home" size={25} color={isFocused ? Colors.red : Colors.black} />);
                } else if (route.name === ScenesKey.SPECIAL_OFFERS) {
                    (labelFocus = isFocused ? '•' : ''),
                        (icon = <Icon type={VectorIconName.FontAweSome} name="gift" size={25} color={isFocused ? Colors.red : Colors.black} />);
                } else if (route.name === ScenesKey.ORDERS_HISTORY) {
                    (labelFocus = isFocused ? '•' : ''),
                        (icon = <Icon type={VectorIconName.FontAweSome} name="history" size={25} color={isFocused ? Colors.red : Colors.black} />);
                } else if (route.name === ScenesKey.PROFILE) {
                    (labelFocus = isFocused ? '•' : ''),
                        (icon = <Icon type={VectorIconName.FontAweSome} name="user" size={25} color={isFocused ? Colors.red : Colors.black} />);
                }
                return <Tab labelFocus={labelFocus} onPress={onPress} key={index.toString()} isFocused={isFocused} icon={icon} />;
            })}
        </View>
    );
};
