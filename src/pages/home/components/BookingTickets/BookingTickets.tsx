import { Colors } from '@common/assets/theme/variables';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './BookingTicketStyles';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import Header from '@components/AppHeader/Header';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate, limitDate } from '@common/utils/time';
import { ScenesKey } from '@common/constants';
import api from '@common/api';
import dayjs from 'dayjs';

export const BookingTicket = ({ route }: any) => {
    const { film } = route.params;
    const maximumDate = limitDate(new Date(), 7);
    const navigation = useNavigation();
    const [bookingDate, setBookingDate] = useState<any>(dayjs(new Date()).format('YYYY-MM-DD'));
    const [bookingTime, setBookingTime] = useState<number>();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [cinemaSelected, setCinemaSelected] = useState<number>();
    const [cinema, setCinema] = useState<number[]>([]);
    const [showTime, setShowTime] = useState<number[]>([]);
    const [resTemp, setResTemp] = useState<any>();

    const getCinemaByFilmId = async () => {
        const res = await api.cinema.getCinemaById({ date: bookingDate, filmId: film.id });
        setResTemp(res);
        const newCinema: number[] = [];
        res.data.map((item: any) => {
            if (!newCinema.includes(item.roomId)) {
                newCinema.push(item.roomId);
            }
        });
        setCinema(newCinema);
    };

    useEffect(() => {
        getCinemaByFilmId();
    }, [bookingDate]);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setBookingDate(dayjs(date).format('YYYY-MM-DD'));
        hideDatePicker();
    };

    const handleSelectTheater = (theaterId: number) => {
        setCinemaSelected(theaterId);
        const timeOfTheater: any[] = [];
        resTemp.data.map((item: any) => {
            if (item.roomId === theaterId) {
                timeOfTheater.push(dayjs(parseInt(item.timeMilestones, 10)).format('HH:mm A'));
            }
        });

        setShowTime(timeOfTheater);
    };

    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
                <Text style={styles.txtBack}>Trở lại</Text>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        if (cinemaSelected && bookingDate && bookingTime) {
            navigation.navigate(ScenesKey.CHOOSE_SEATS, { cinemaSelected, bookingDate, bookingTime, film });
        }
    }, [cinemaSelected, bookingTime, bookingDate]);

    return (
        <>
            <Header leftTabBar={renderLeftTabBar()} />
            <ScrollView>
                <View style={styles.itemContainer}>
                    <Text style={styles.filmName}>{film.filmName}</Text>
                    <View style={styles.chooseDate}>
                        <Text>
                            <Text style={styles.txtDate}>Ngày: </Text>
                            {formatDate(bookingDate)}
                        </Text>
                        <TouchableOpacity onPress={showDatePicker}>
                            <Icon type={VectorIconName.FontAweSome} name="calendar" size={25} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                    {cinema.map((item, index) => {
                        return (
                            <View key={index} style={{ borderColor: 'gray', borderBottomWidth: 1, marginVertical: 10 }}>
                                <TouchableOpacity
                                    style={styles.room}
                                    onPress={() => {
                                        handleSelectTheater(item);
                                    }}
                                >
                                    <Text>cinema {item}</Text>
                                    <Icon
                                        type={VectorIconName.FontAweSome}
                                        name={cinemaSelected === item ? 'angle-up' : 'angle-down'}
                                        size={25}
                                        color={Colors.black}
                                    />
                                </TouchableOpacity>
                                {cinemaSelected === item && (
                                    <View style={styles.timeDetail}>
                                        {showTime.map((time, idx) => {
                                            return (
                                                <Text
                                                    key={idx}
                                                    onPress={() => {
                                                        setBookingTime(time);
                                                    }}
                                                    style={bookingTime === time ? styles.timeItemSelected : styles.timeItem}
                                                >
                                                    {time}
                                                </Text>
                                            );
                                        })}
                                    </View>
                                )}
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                // minimumDate={new Date()}
                maximumDate={maximumDate}
            />
        </>
    );
};
