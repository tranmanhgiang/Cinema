import { SeatStatus } from '@common/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './SeatStyles';

interface SeatProps {
    seat: SeatStatus;
    handleSelect: (seat: SeatStatus) => void;
    isSelect: boolean;
    isChosen: boolean;
}

export const Seat = ({ seat, handleSelect, isSelect, isChosen }: SeatProps) => {
    return (
        <TouchableOpacity
            onPress={() => {
                handleSelect(seat);
            }}
        >
            <Text style={isSelect ? styles.seatSelected : isChosen ? styles.seatChosen : styles.seat}>{seat.name}</Text>
        </TouchableOpacity>
    );
};
