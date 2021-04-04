import React, { useState } from 'react';
import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@components/AppHeader/Header';
import styles from './OrdersHistoryStyles';
import common from '@common/assets/theme/common';
import Modal from 'react-native-modal';
import { TicketInfo } from './components/TicketInfo';

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
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ticketItem, setTicketItem] = useState<any>();

    const renderContentTabBar = () => <Text style={styles.title}>Lịch sử</Text>;
    const onOk = () => {
        setIsModalVisible(false);
    };

    const onSelectedItem = (id: number) => {
        setIsModalVisible(true);
        const dataItem = DATA_FIXED.find((item) => item.id === id);
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
                    <Image source={{ uri: item.imgUrl }} style={styles.image} />
                </View>
                <View style={styles.details}>
                    <Text style={item.id === 1 ? styles.exceedDate : styles.notExceedDate}>{item.id === 1 ? 'Đã sử dụng' : 'Chưa sử dụng'}</Text>
                    <Text style={styles.filmName}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Ngày:</Text> 03 tháng 4, 2021
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Giờ chiếu:</Text> 2:30 PM - 4:30 PM
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Rạp: </Text> 1
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={styles.price}>Tổng thanh toán: 150.000 vnđ</Text>
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
                    {DATA_FIXED.map((data, index) => {
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
