import { Colors } from "@common/assets/theme/variables";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./BookingTicketStyles";
import Icon, { VectorIconName } from "@components/VectorIcon/VectorIcon";
import Header from "@components/AppHeader/Header";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate, limitDate } from "@common/utils/time";
import { Seats } from "@components/Seats/Seats";
import common from "@common/assets/theme/common";

export const BookingTicket = ({ route }: any) => {
    const { film } = route.params;
    const maximumDate = limitDate(new Date(), 7);

    const navigation = useNavigation();
    const [bookingDate, setBookingDate] = useState(new Date());
    const [bookingTime, setBookingTime] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isVisibleBuyTicket, setIsVisibleBuyTicket] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setBookingDate(date);
        hideDatePicker();
    };

    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity
                style={styles.leftHeader}
                onPress={() => navigation.goBack()}
            >
                <Icon
                    type={VectorIconName.FontAweSome}
                    name="arrow-left"
                    size={18}
                    color={Colors.black}
                />
                <Text style={styles.txtBack}>Back</Text>
            </TouchableOpacity>
        );
    };

    const time_fixed = [
        "8:00 AM",
        "10:00 AM",
        "13:00 AM",
        "16:00 AM",
        "20:00 AM",
    ];

    return (
        <>
            <Header leftTabBar={renderLeftTabBar()} />
            <ScrollView>
                <View style={styles.itemContainer}>
                    <Text style={styles.filmName}>{film.name}</Text>
                    <View style={styles.chooseDate}>
                        <Text>
                            <Text style={styles.txtDate}>Date: </Text>
                            {formatDate(bookingDate)}
                        </Text>
                        <TouchableOpacity onPress={showDatePicker}>
                            <Icon
                                type={VectorIconName.FontAweSome}
                                name="calendar"
                                size={25}
                                color={Colors.black}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.txtDate}>Time: </Text>
                        <View style={styles.timeDetail}>
                            {time_fixed.map((time, index) => {
                                return (
                                    <Text
                                        key={index}
                                        onPress={() => {
                                            setBookingTime(time);
                                        }}
                                        style={
                                            bookingTime === time
                                                ? styles.timeItemSelected
                                                : styles.timeItem
                                        }
                                    >
                                        {time}
                                    </Text>
                                );
                            })}
                        </View>
                    </View>
                    <View>
                        <View style={styles.screen}>
                            <Text style={styles.txtScreen}>Screen</Text>
                        </View>
                        <Seats
                            isVisibleBuyTicket={isVisibleBuyTicket}
                            setIsVisibleBuyTicket={setIsVisibleBuyTicket}
                        />
                    </View>
                    {isVisibleBuyTicket && (
                        <View style={[styles.buyContainer, common.shadow]}>
                            <View style={styles.priceSection}>
                                <Text>Price</Text>
                                <Text style={styles.price}>$ 50,00</Text>
                            </View>
                            <View style={styles.buy}>
                                <Text style={styles.txtBuy}>Buy</Text>
                                <Icon
                                    type={VectorIconName.FontAweSome}
                                    name="arrow-right"
                                    size={20}
                                    color={Colors.black}
                                />
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={new Date()}
                maximumDate={maximumDate}
            />
        </>
    );
};
