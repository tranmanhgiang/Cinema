import { SeatStatus } from '@common/types';
import { getSelectedSeats } from '@services/cinema/actions';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Seat } from './Seat';
import styles from './SeatStyles';

interface SeatProps {
    seatArr: SeatStatus[];
    isVisibleBuyTicket: boolean;
    setIsVisibleBuyTicket: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Seats = ({ seatArr, isVisibleBuyTicket, setIsVisibleBuyTicket }: SeatProps) => {
    const dispatch = useDispatch();
    const [seatSelected, setSeatSelected] = useState<number[]>([]);

    const handleSelect = (seat: SeatStatus) => {
        if (!seat.isSelected) {
            const seatIndex = seatSelected.indexOf(seat.index);
            const newSeatSelected = [...seatSelected];
            if (seatIndex !== -1) {
                newSeatSelected.splice(seatIndex, 1);
                setSeatSelected(newSeatSelected);
            } else {
                newSeatSelected.push(seat.index);
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

    return (
        <>
            <View style={styles.room}>
                {seatArr.map((seat, index) => {
                    return (
                        <Seat
                            key={index}
                            seat={seat}
                            handleSelect={handleSelect}
                            isSelect={seatSelected.indexOf(seat.index) !== -1 || seat.isSelected}
                        />
                    );
                })}
            </View>
            <View style={styles.note}>
                <View style={styles.noteItem}>
                    <Text style={styles.seat} />
                    <Text>còn trống</Text>
                </View>
                <View style={styles.noteItem}>
                    <Text style={styles.seatSelected} />
                    <Text style={{ color: 'red', alignItems: 'center' }}>đã đặt</Text>
                </View>
            </View>
        </>
    );
};
