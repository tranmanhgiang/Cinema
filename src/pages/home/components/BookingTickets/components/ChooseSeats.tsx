import api from '@common/api';
import common from '@common/assets/theme/common';
import { Colors } from '@common/assets/theme/variables';
import { ScenesKey } from '@common/constants';
import { GlobalState } from '@common/redux/rootReducer';
import { SeatStatus } from '@common/types';
import Header from '@components/AppHeader/Header';
import { Seats } from '@components/Seats/Seats';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from '../BookingTicketStyles';

export const ChooseSeats = ({ route }: any) => {
    const { film, bookingDate, bookingTime, cinemaSelected } = route.params;
    const navigation = useNavigation();
    const price = useSelector((state: GlobalState) => state.ticket.price);
    const [isVisibleBuyTicket, setIsVisibleBuyTicket] = useState(false);
    const [seatArr, setSeatArr] = useState<SeatStatus[]>([]);

    const renderRoom = async () => {
        const seatSelected = await api.cinema.checkSeatSelected({ theaterId: cinemaSelected, filmId: film.id });
        const newSeatArr: SeatStatus[] = [];
        for (let i = 1; i <= 30; i++) {
            newSeatArr.push({ index: i, isSelected: seatSelected.data.includes(i) });
        }
        setSeatArr(newSeatArr);
    };

    useEffect(() => {
        renderRoom();
    }, []);

    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
                <Text style={styles.txtBack}>{film.filmName}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <>
            <Header leftTabBar={renderLeftTabBar()} />
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View>
                    <View style={styles.screen}>
                        <Text style={styles.txtScreen}>Screen</Text>
                    </View>
                    <Seats seatArr={seatArr} isVisibleBuyTicket={isVisibleBuyTicket} setIsVisibleBuyTicket={setIsVisibleBuyTicket} />
                </View>
                {isVisibleBuyTicket && (
                    <View style={[styles.buyContainer, common.shadow]}>
                        <View style={styles.priceSection}>
                            <Text>Price</Text>
                            <Text style={styles.price}>$ {price}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buy}
                            onPress={() => {
                                navigation.navigate(ScenesKey.PAYMENT, { bookingDate, bookingTime, filmId: film.id, cinemaSelected });
                            }}
                        >
                            <Text style={styles.txtBuy}>Buy</Text>
                            <Icon type={VectorIconName.FontAweSome} name="arrow-right" size={20} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </>
    );
};
