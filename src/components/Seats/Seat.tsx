import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './SeatStyles';

interface SeatProps {
    labelSeat: number;
    handleSelect: (labelSeat: number) => void;
    isSelected: boolean;
}

export const Seat = ({ labelSeat, handleSelect, isSelected }: SeatProps) => {
    return (
        <TouchableOpacity onPress={() => {handleSelect(labelSeat)}}>
            <Text style={isSelected ? styles.seatSelected : styles.seat}>{labelSeat}</Text>
        </TouchableOpacity>
    );
};
