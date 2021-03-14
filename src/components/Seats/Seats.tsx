import { getSelectedSeats } from "@services/cinema/actions";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { Seat } from "./Seat";
import styles from "./SeatStyles";

interface SeatProps {
    isVisibleBuyTicket: boolean;
    setIsVisibleBuyTicket: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Seats = ({ isVisibleBuyTicket, setIsVisibleBuyTicket }: SeatProps) => {
    const dispatch = useDispatch();
    const [seatSelected, setSeatSelected] = useState<number[]>([]);

    const renderRoom = () => {
        const seatArr: number[] = [];
        for (var i = 1; i <= 30; i++) {
            seatArr.push(i);
        }
        return seatArr;
    };
    const seats = renderRoom();

    const handleSelect = (labelSeat: number) => {
        const seatIndex = seatSelected.indexOf(labelSeat);
        const newSeatSelected = [...seatSelected];
        if (seatIndex !== -1) {
            newSeatSelected.splice(seatIndex, 1);
            setSeatSelected(newSeatSelected);
        } else {
            newSeatSelected.push(labelSeat);
            setSeatSelected(newSeatSelected);
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
                {seats.map((seat, index) => {
                    return (
                        <Seat
                            key={index}
                            labelSeat={seat}
                            handleSelect={handleSelect}
                            isSelected={seatSelected.indexOf(seat) !== -1}
                        />
                    );
                })}
            </View>
            <View style={styles.note}>
                <View style={styles.noteItem}>
                    <Text style={styles.seat} />
                    <Text>available</Text>
                </View>
                <View style={styles.noteItem}>
                    <Text style={styles.seatSelected} />
                    <Text style={{ color: "red", alignItems: "center" }}>
                        selected
                    </Text>
                </View>
            </View>
        </>
    );
};
