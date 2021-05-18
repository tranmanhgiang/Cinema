import api from '@common/api';
import common from '@common/assets/theme/common';
import { Colors } from '@common/assets/theme/variables';
import { ScenesKey } from '@common/constants';
import { GlobalState } from '@common/redux/rootReducer';
import { SeatStatus } from '@common/types';
import { formatCurrency } from '@common/utils/formatCurrency';
import Header from '@components/AppHeader/Header';
import { Seats } from '@components/Seats/Seats';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { useNavigation } from '@react-navigation/native';
import { resetCheckout } from '@services/cinema/actions';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../BookingTicketStyles';
import { PopcornDrinks } from './PopcornDrinks/PopcornDrinks';

export const ChooseSeats = ({ route }: any) => {
    const { film, bookingDate, bookingTime, cinemaSelected } = route.params;

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const ticketInfo = useSelector((state: GlobalState) => state.ticket);
    const [isVisibleBuyTicket, setIsVisibleBuyTicket] = useState(false);
    const [seatArr, setSeatArr] = useState<SeatStatus[]>([]);
    const [isChooseSeatsDone, setChooseSeatsDone] = useState(false);

    const renderRoom = async () => {
        const seatSelected = await api.user.checkSeatSelected({ theaterId: cinemaSelected, filmId: film.id, date: bookingDate, time: bookingTime });
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
            <TouchableOpacity
                style={styles.leftHeader}
                onPress={() => {
                    dispatch(resetCheckout());
                    navigation.goBack();
                }}
            >
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
                <Text style={styles.txtBack}>{film.filmName}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <>
            <Header leftTabBar={renderLeftTabBar()} />
            <View style={{ flex: 1 }}>
                {!isChooseSeatsDone ? (
                    <View style={{ flex: 7 }}>
                        <View style={styles.screen}>
                            <Text style={styles.txtScreen}>Màn hình</Text>
                        </View>
                        <Seats seatArr={seatArr} isVisibleBuyTicket={isVisibleBuyTicket} setIsVisibleBuyTicket={setIsVisibleBuyTicket} />
                    </View>
                ) : (
                    <View style={{ flex: 7 }}>
                        <PopcornDrinks />
                    </View>
                )}
                {isVisibleBuyTicket && (
                    <View style={[styles.buyContainer, common.shadow, { flex: 1 }]}>
                        <View style={styles.priceSection}>
                            <Text>Tổng cộng</Text>
                            <Text style={styles.price}>{formatCurrency(ticketInfo.price + ticketInfo.toppingPrice)} vnđ</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buy}
                            onPress={() => {
                                if (!isChooseSeatsDone) {
                                    setChooseSeatsDone(true);
                                } else {
                                    navigation.navigate(ScenesKey.PAYMENT, {
                                        bookingDate,
                                        bookingTime,
                                        filmId: film.id,
                                        filmName: film.filmName,
                                        cinemaSelected,
                                        price: ticketInfo.price + ticketInfo.toppingPrice,
                                    });
                                }
                            }}
                        >
                            <Text style={styles.txtBuy}>Đặt vé</Text>
                            <Icon type={VectorIconName.FontAweSome} name="arrow-right" size={20} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </>
    );
};
