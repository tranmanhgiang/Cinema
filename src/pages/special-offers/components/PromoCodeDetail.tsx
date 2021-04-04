import React from 'react';
import { Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import styles from '../SpecialOfferStyles';
import { useNavigation } from '@react-navigation/native';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { Colors } from '@common/assets/theme/variables';
import common from '@common/assets/theme/common';

export interface PromoCodeProps {
    item: any;
    index: number;
}

export const PromoCodeDetail = () => {
    const navigation = useNavigation();

    return (
        <>
            <Image source={require('@common/assets/images/bgau.jpg')} style={styles.imageCover} />
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.Feather} name="arrow-left" size={25} color={Colors.white} />
            </TouchableOpacity>
            <View style={[styles.promoTitle, common.shadow]}>
                <View style={styles.promoCodeField}>
                    <Text style={styles.promoCode}>HAPPYOXYEAR</Text>
                </View>
                <Text style={styles.titlePromo}>Giảm 50k cho đơn 90k</Text>
                <Text style={styles.date}>Sử dụng đến: 30.04.2021</Text>
            </View>
            <ScrollView>
                <View style={styles.description}>
                    <Text style={styles.txtDescription}>
                        • Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum tempore fugiat commodi labore, reprehenderit recusandae,
                        aliquid libero eligendi dolorum impedit velit! Vel, sequi a saepe nulla odio eaque libero.
                    </Text>
                    <Text style={styles.txtDescription}>
                        • Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum tempore fugiat commodi labore, reprehenderit recusandae,
                        aliquid libero eligendi dolorum impedit velit! Vel, sequi a saepe nulla odio eaque libero.
                    </Text>
                </View>
            </ScrollView>
        </>
    );
};
