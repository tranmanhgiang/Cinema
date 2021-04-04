import React from 'react';
import { Text, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import Header from '@components/AppHeader/Header';
import styles from './SpecialOfferStyles';
import { useNavigation } from '@react-navigation/native';
import { ScenesKey } from '@common/constants';

const DATA_FIXED = [
    {
        id: 1,
        name: 'Aenean leo',
        theater: 1,
        promoCode: 'HAPPY OX YEAR',
        imgUrl: 'https://www.cgv.vn/media/wysiwyg/2021/012021/happy-new-year-350x495.png',
    },
    {
        id: 2,
        name: 'In turpis',
        theater: 2,
        promoCode: 'WEDNESDAY',
        imgUrl: 'https://www.cgv.vn/media/wysiwyg/2020/082020/HAPPY_WEDNESDAY-FINAL_350x495.jpg',
    },
    {
        id: 3,
        name: 'In turpis',
        theater: 2,
        promoCode: 'WEDNESDAY',
        imgUrl: 'https://www.cgv.vn/media/wysiwyg/2020/082020/HAPPY_WEDNESDAY-FINAL_350x495.jpg',
    },
];

export interface PromoCodeProps {
    item: any;
    index: number;
}

export const SpecialOffers = () => {
    const navigation = useNavigation();
    const renderContentTabBar = () => <Text style={styles.title}>Mã giảm giá & Ưu đãi</Text>;

    const FilmItem = ({ item, index }: PromoCodeProps) => {
        return (
            <View style={{ padding: 16 }}>
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        navigation.navigate(ScenesKey.PROMO_CODE_DETAIL);
                    }}
                >
                    <Image source={{ uri: item.imgUrl }} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.infoFilm}>
                    <View style={styles.leftInfo}>
                        <Text style={styles.filmName}>{item.promoCode}</Text>
                        <View style={{ flexDirection: 'row' }} />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <>
            <Header contentTabBar={renderContentTabBar()} />
            <ScrollView>
                <View style={styles.container}>
                    {DATA_FIXED.map((data, index) => {
                        return <FilmItem key={index} item={data} index={index} />;
                    })}
                </View>
            </ScrollView>
        </>
    );
};
