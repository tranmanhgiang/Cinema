import { SeatStatus } from '@common/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './SeatStyles';

interface SeatProps {
    seat: SeatStatus;
    handleSelect: (seat: SeatStatus) => void;
    isSelect: boolean;
}

export const Seat = ({ seat, handleSelect, isSelect }: SeatProps) => {
    return (
        <TouchableOpacity
            onPress={() => {
                handleSelect(seat);
            }}
        >
            <Text style={isSelect ? styles.seatSelected : styles.seat}>{seat.index}</Text>
        </TouchableOpacity>
    );
};
