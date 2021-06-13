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
import { getSelectedSeats, resetCheckout } from '@services/cinema/actions';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
    const [seatSelected, setSeatSelected] = useState<any[]>([]);

    const handleSelect = (seat: SeatStatus) => {
        if (!seat.isSelected && !seat.isChosen) {
            const seatIndex = seatSelected.indexOf(seat);
            const newSeatSelected = [...seatSelected];
            if (seatIndex !== -1) {
                newSeatSelected.splice(seatIndex, 1);
                setSeatSelected(newSeatSelected);
            } else {
                newSeatSelected.push(seat);
                setSeatSelected(newSeatSelected);
            }
        }
    };

    useEffect(() => {
        if (seatSelected.length && !isVisibleBuyTicket) {
            setIsVisibleBuyTicket(true);
        } else if (!seatSelected.length && isVisibleBuyTicket) {
            setIsVisibleBuyTicket(false);
        }
        dispatch(getSelectedSeats({ seats: seatSelected }));
    }, [seatSelected]);

    const renderRoom = async () => {
        // seats ordered
        const selected = await api.user.checkSeatSelected({ theaterId: cinemaSelected, filmId: film.id, date: bookingDate, time: bookingTime });
        // seats chosen
        const seatChosen = await api.user.checkSeatsChosen({ theaterId: cinemaSelected, filmId: film.id, date: bookingDate, time: bookingTime });
        let newSeatChosen: any[] = [];
        newSeatChosen = seatChosen?.data
            ?.map((item: any) => {
                return item.seats;
            })
            .join(',');

        const seatOfRoom = await api.cinema.getSeatOfCinema({ roomId: cinemaSelected });
        const newSeatArr: SeatStatus[] = [];
        for (let i = 1; i <= seatOfRoom.data[0].numberOfSeats; i++) {
            const normalSeat = seatOfRoom.data[0].numberOfSeats - seatOfRoom.data[0].vipSeats;
            if (i <= normalSeat) {
                if (i <= 6) {
                    newSeatArr.push({ index: i, name: 'A' + i, isSelected: selected.data.includes(i), isChosen: newSeatChosen.includes(i) });
                } else if (i <= 12) {
                    newSeatArr.push({
                        index: i,
                        name: 'B' + `${i - 6}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 18) {
                    newSeatArr.push({
                        index: i,
                        name: 'C' + `${i - 6 * 2}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 24) {
                    newSeatArr.push({
                        index: i,
                        name: 'D' + `${i - 6 * 3}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 30) {
                    newSeatArr.push({
                        index: i,
                        name: 'E' + `${i - 6 * 4}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 36) {
                    newSeatArr.push({
                        index: i,
                        name: 'F' + `${i - 6 * 5}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 42) {
                    newSeatArr.push({
                        index: i,
                        name: 'G' + `${i - 6 * 6}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 48) {
                    newSeatArr.push({
                        index: i,
                        name: 'H' + `${i - 6 * 7}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 54) {
                    newSeatArr.push({
                        index: i,
                        name: 'I' + `${i - 6 * 8}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                }
            } else {
                if (i <= 6) {
                    newSeatArr.push({ index: i, name: 'V_A' + i, isSelected: selected.data.includes(i), isChosen: newSeatChosen.includes(i) });
                } else if (i <= 12) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_B' + `${i - 6}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 18) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_C' + `${i - 6 * 2}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 24) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_D' + `${i - 6 * 3}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 30) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_E' + `${i - 6 * 4}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 36) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_F' + `${i - 6 * 5}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 42) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_G' + `${i - 6 * 6}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 48) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_H' + `${i - 6 * 7}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                } else if (i <= 54) {
                    newSeatArr.push({
                        index: i,
                        name: 'V_I' + `${i - 6 * 8}`,
                        isSelected: selected.data.includes(i),
                        isChosen: newSeatChosen.includes(i),
                    });
                }
            }
        }
        setSeatArr(newSeatArr);
    };

    const handleStepContinue = async () => {
        const newSeats: any[] = [];
        seatSelected.map((seat: any) => {
            newSeats.push(seat.index);
        });
        if (!isChooseSeatsDone) {
            setChooseSeatsDone(true);
            await api.user.choosingSeats({
                theaterId: cinemaSelected,
                filmId: film.id,
                date: bookingDate,
                time: bookingTime,
                seats: newSeats.toString(),
            });
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
    };

    useEffect(() => {
        renderRoom();
    }, []);

    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity
                style={styles.leftHeader}
                onPress={async () => {
                    if (isChooseSeatsDone) {
                        await api.user.delSeatChosen();
                        setChooseSeatsDone(false);
                    } else {
                        dispatch(resetCheckout());
                        navigation.goBack();
                    }
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
                        <ScrollView>
                            <View style={styles.screen}>
                                <Text style={styles.txtScreen}>Màn hình</Text>
                            </View>
                            <Seats
                                seatArr={seatArr}
                                isVisibleBuyTicket={isVisibleBuyTicket}
                                setIsVisibleBuyTicket={setIsVisibleBuyTicket}
                                seatSelected={seatSelected}
                                handleSelect={handleSelect}
                            />
                        </ScrollView>
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
                        <TouchableOpacity style={styles.buy} onPress={handleStepContinue}>
                            <Text style={styles.txtBuy}>Đặt vé</Text>
                            <Icon type={VectorIconName.FontAweSome} name="arrow-right" size={20} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </>
    );
};
