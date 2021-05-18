import React from 'react';
import { Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import styles from '../SpecialOfferStyles';
import { useNavigation } from '@react-navigation/native';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { Colors } from '@common/assets/theme/variables';
import common from '@common/assets/theme/common';
import dayjs from 'dayjs';

export interface PromoCodeProps {
    item: any;
    index: number;
}

export const PromoCodeDetail = ({ route }: any) => {
    const { item } = route.params;
    const navigation = useNavigation();

    return (
        <>
            <Image source={{ uri: item.imageUrl }} style={styles.imageCover} />
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.Feather} name="arrow-left" size={25} color={Colors.white} />
            </TouchableOpacity>
            <View style={[styles.promoTitle, common.shadow]}>
                <View style={styles.promoCodeField}>
                    <Text style={styles.promoCode}>{item.couponCode}</Text>
                </View>
                <Text style={styles.titlePromo}>{item.name}</Text>
                <Text style={styles.date}>Sử dụng đến: {dayjs(parseInt(item.endDate, 10)).format('DD.MM.YYYY')}</Text>
            </View>
            <ScrollView>
                <View style={styles.description}>
                    <Text style={styles.txtDescription}>• {item.description}</Text>
                    <Text style={styles.txtDescription}>
                        • Áp dụng cho {item.memberRole === 0 ? 'tất cả các thành viên' : item.memberRole === 1 ? 'thành viên bạc' : 'thành viên vàng'}
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
