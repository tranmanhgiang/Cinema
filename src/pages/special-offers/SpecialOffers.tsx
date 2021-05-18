import React, { useEffect, useState } from 'react';
import { Text, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import Header from '@components/AppHeader/Header';
import styles from './SpecialOfferStyles';
import { useNavigation } from '@react-navigation/native';
import { ScenesKey } from '@common/constants';
import api from '@common/api';
import { OptionToast } from '@common/assets/theme/common';
import { getErrorMessage } from '@common/utils/detectErrorApi';
import Toast from 'react-native-root-toast';
import { checkCurrentPosition } from '@common/utils';
import { useSelector } from 'react-redux';
import { GlobalState } from '@common/redux/rootReducer';

export interface PromoCodeProps {
    item: any;
    index: number;
}

export const SpecialOffers = () => {
    const navigation = useNavigation();
    const userProfile = useSelector((state: GlobalState) => state.user.userProfile);

    const renderContentTabBar = () => <Text style={styles.title}>Mã giảm giá & Ưu đãi</Text>;
    const [listCoupons, setListCoupons] = useState<any[]>([]);

    const getCoupons = async () => {
        try {
            const res = await api.user.getCoupons();
            if (res.message === 'true') {
                const newData: any = [];
                res.data.map((coupon: any) => {
                    if (!coupon.memberRole || coupon.memberRole === checkCurrentPosition(userProfile.purchased)) {
                        newData.push(coupon);
                    }
                });
                setListCoupons(newData);
            }
        } catch (error) {
            Toast.show(getErrorMessage(error), OptionToast);
        }
    };

    const FilmItem = ({ item, index }: PromoCodeProps) => {
        return (
            <View style={{ padding: 16 }}>
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        navigation.navigate(ScenesKey.PROMO_CODE_DETAIL, { item });
                    }}
                >
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.infoFilm}>
                    <View style={styles.leftInfo}>
                        <Text style={styles.filmName}>{item.couponCode}</Text>
                        <View style={{ flexDirection: 'row' }} />
                    </View>
                </View>
            </View>
        );
    };

    useEffect(() => {
        getCoupons();
    }, []);

    return (
        <>
            <Header contentTabBar={renderContentTabBar()} />
            <ScrollView>
                <View style={styles.container}>
                    {listCoupons.map((data, index) => {
                        return <FilmItem key={index} item={data} index={index} />;
                    })}
                </View>
            </ScrollView>
        </>
    );
};
