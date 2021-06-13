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
    handleSelect: (seats: SeatStatus) => void;
    seatSelected: any[];
}

export const Seats = ({ seatArr, isVisibleBuyTicket, setIsVisibleBuyTicket, handleSelect, seatSelected }: SeatProps) => {
    // const dispatch = useDispatch();
    // const [seatSelected, setSeatSelected] = useState<any[]>([]);

    // const handleSelect = (seat: SeatStatus) => {
    //     if (!seat.isSelected && !seat.isChosen) {
    //         const seatIndex = seatSelected.indexOf(seat);
    //         const newSeatSelected = [...seatSelected];
    //         if (seatIndex !== -1) {
    //             newSeatSelected.splice(seatIndex, 1);
    //             setSeatSelected(newSeatSelected);
    //         } else {
    //             newSeatSelected.push(seat);
    //             setSeatSelected(newSeatSelected);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     if (seatSelected.length && !isVisibleBuyTicket) {
    //         setIsVisibleBuyTicket(true);
    //     } else if (!seatSelected.length && isVisibleBuyTicket) {
    //         setIsVisibleBuyTicket(false);
    //     }
    //     dispatch(getSelectedSeats({ seats: seatSelected }));
    // }, [seatSelected]);

    return (
        <>
            <View style={styles.room}>
                {seatArr.map((seat, index) => {
                    return (
                        <Seat
                            key={index}
                            seat={seat}
                            handleSelect={handleSelect}
                            isSelect={seatSelected.indexOf(seat) !== -1 || seat.isSelected}
                            isChosen={seat.isChosen}
                        />
                    );
                })}
            </View>
            <View style={styles.note}>
                <View style={styles.noteItem}>
                    <Text style={styles.seat} />
                    <Text>ghế thường</Text>
                </View>
                <View style={styles.noteItem}>
                    <Text style={styles.seat}>V_</Text>
                    <Text>ghế vip</Text>
                </View>
                <View style={styles.noteItem}>
                    <Text style={styles.seatSelected} />
                    <Text style={{ color: 'red', alignItems: 'center' }}>đã đặt</Text>
                </View>
            </View>
        </>
    );
};
