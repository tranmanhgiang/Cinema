import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@components/AppHeader/Header';
import styles from './OrdersHistoryStyles';
import common from '@common/assets/theme/common';
import Modal from 'react-native-modal';
import { TicketInfo } from './components/TicketInfo';
import { getTokenStorage } from '@common/utils/storage';
import { useNavigation } from '@react-navigation/native';
import { ScenesKey } from '@common/constants';
import api from '@common/api';
import dayjs from 'dayjs';

const DATA_FIXED = [
    {
        id: 1,
        name: 'Aenean leo',
        theater: 1,
        body:
            'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD',
    },
    {
        id: 2,
        name: 'In turpis',
        theater: 2,
        body:
            'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
        imgUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P',
    },
];

export interface FilmItemProps {
    item: any;
    index: number;
}

export const OrdersHistory = () => {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ticketItem, setTicketItem] = useState<any>();
    const [orderInfo, setOrderInfo] = useState<any>();

    const getTokenFromStorage = async () => {
        const tokenStorage = await getTokenStorage();
        if (tokenStorage !== null) {
            const res = await api.user.getHistoryBooked();
            setOrderInfo(res.data);
        } else {
            navigation.navigate(ScenesKey.LOGIN);
        }
    };

    useEffect(() => {
        getTokenFromStorage();
    }, []);

    const renderContentTabBar = () => <Text style={styles.title}>Lịch sử</Text>;
    const onOk = () => {
        setIsModalVisible(false);
    };

    const onSelectedItem = (id: number) => {
        setIsModalVisible(true);
        const dataItem = orderInfo.find((item: any) => item.id === id);
        setTicketItem(dataItem);
    };

    const FilmItem = ({ item, index }: FilmItemProps) => {
        return (
            <TouchableOpacity
                style={[styles.itemContainer, common.shadow]}
                onPress={() => {
                    onSelectedItem(item.id);
                }}
            >
                <View key={index}>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                </View>
                <View style={styles.details}>
                    <Text style={dayjs(new Date()).valueOf() - dayjs(item.date).valueOf() > 0 ? styles.exceedDate : styles.notExceedDate}>
                        {dayjs(new Date()).valueOf() - dayjs(item.date).valueOf() > 0 ? 'Đã sử dụng' : 'Chưa sử dụng'}
                    </Text>
                    <Text style={styles.filmName}>{item.filmName}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Ngày:</Text> {item.date}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Giờ chiếu:</Text> {dayjs(item.time).format('HH:mm A')} -{' '}
                            {dayjs(item.time + item.duration).format('HH:mm A')}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Rạp: </Text> {item.name}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={styles.price}>Tổng thanh toán: {item.price} vnđ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <>
            <ScrollView>
                <Header contentTabBar={renderContentTabBar()} />
                <View>
                    {orderInfo?.map((data: any, index: number) => {
                        return <FilmItem key={index} item={data} index={index} />;
                    })}
                </View>
            </ScrollView>
            <Modal
                isVisible={isModalVisible}
                backdropColor="#B4B3DB"
                backdropOpacity={0.8}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
            >
                <TicketInfo onOk={onOk} ticketItem={ticketItem} />
            </Modal>
        </>
    );
};
