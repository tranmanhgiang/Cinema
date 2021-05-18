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
import dayjs from 'dayjs';
import { Tab, Tabs } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '@common/redux/rootReducer';
import { getBookTicketHistory } from '@services/user/actions';
import { formatCurrency } from '@common/utils/formatCurrency';

export interface FilmItemProps {
    item: any;
    index: number;
}

export const OrdersHistory = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const bookTicketHistory: any = useSelector((state: GlobalState) => state.user.history);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ticketItem, setTicketItem] = useState<any>();

    const getTokenFromStorage = async () => {
        const tokenStorage = await getTokenStorage();
        if (tokenStorage === null) {
            navigation.navigate(ScenesKey.LOGIN);
        }
    };

    useEffect(() => {
        getTokenFromStorage();
        dispatch(getBookTicketHistory());
    }, []);

    const renderContentTabBar = () => <Text style={styles.title}>Lịch sử</Text>;
    const onOk = () => {
        setIsModalVisible(false);
    };

    const onSelectedItem = (id: number) => {
        setIsModalVisible(true);
        const dataItem = bookTicketHistory.find((item: any) => item.id === id);
        setTicketItem(dataItem);
    };

    const checkExceedDate = (dateTime: string) => {
        return dayjs().valueOf() - dayjs(dateTime).valueOf() > 0;
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
                    <Text style={checkExceedDate(item.date) ? styles.exceedDate : styles.notExceedDate}>
                        {checkExceedDate(item.date) ? 'Đã sử dụng' : 'Chưa sử dụng'}
                    </Text>
                    <Text style={styles.filmName}>{item.filmName}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Ngày:</Text> {dayjs(item.date).format('DD-MM-YYYY')}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Giờ chiếu:</Text> {dayjs(parseInt(item.time, 10)).format('HH:mm')} h -{' '}
                            {dayjs(parseInt(item.time, 10) + parseInt(item.duration, 10)).format('HH:mm')} h
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Rạp: </Text> {item.name}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={styles.price}>Tổng thanh toán: {formatCurrency(item.price)} vnđ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <Header contentTabBar={renderContentTabBar()} />
            <Tabs>
                <Tab
                    heading="Phim sắp xem"
                    tabStyle={{ backgroundColor: 'red' }}
                    textStyle={{ color: '#fff' }}
                    activeTabStyle={{ backgroundColor: 'red' }}
                    activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}
                >
                    <ScrollView>
                        {bookTicketHistory.length > 0 &&
                            bookTicketHistory.map((data: any, index: number) => {
                                return !checkExceedDate(data.date) && <FilmItem key={index} item={data} index={index} />;
                            })}
                    </ScrollView>
                </Tab>
                <Tab
                    heading="Phim đã xem"
                    tabStyle={{ backgroundColor: 'red' }}
                    textStyle={{ color: '#fff' }}
                    activeTabStyle={{ backgroundColor: 'red' }}
                    activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}
                >
                    <ScrollView>
                        {bookTicketHistory.length > 0 &&
                            bookTicketHistory.map((data: any, index: number) => {
                                return checkExceedDate(data.date) && <FilmItem key={index} item={data} index={index} />;
                            })}
                    </ScrollView>
                </Tab>
            </Tabs>
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
