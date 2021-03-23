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

export const BookingTicket = ({ route }: any) => {
    const { film } = route.params;
    const maximumDate = limitDate(new Date(), 7);
    const navigation = useNavigation();
    const [bookingDate, setBookingDate] = useState(new Date());
    const [bookingTime, setBookingTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [cinemaSelected, setCinemaSelected] = useState<string>('');

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
            <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
                <Text style={styles.txtBack}>Back</Text>
            </TouchableOpacity>
        );
    };

    const time_fixed = ['8:00 AM', '10:00 AM', '13:00 AM', '16:00 AM', '20:00 AM'];
    const cinema_fixed = ['cinema 1', 'cinema 2'];

    useEffect(() => {
        if (cinemaSelected && bookingDate && bookingTime) {
            navigation.navigate(ScenesKey.CHOOSE_SEATS, { cinemaSelected: cinemaSelected, bookingTime, film: film });
        }
    }, [cinemaSelected, bookingTime, bookingDate]);
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
                            <Icon type={VectorIconName.FontAweSome} name="calendar" size={25} color={Colors.black} />
                        </TouchableOpacity>
                    </View>
                    {cinema_fixed.map((cinema, index) => {
                        return (
                            <View key={index} style={{ borderColor: 'gray', borderBottomWidth: 1, marginVertical: 10 }}>
                                <TouchableOpacity
                                    style={styles.room}
                                    onPress={() => {
                                        setCinemaSelected(cinema);
                                    }}
                                >
                                    <Text>{cinema}</Text>
                                    <Icon
                                        type={VectorIconName.FontAweSome}
                                        name={cinemaSelected === cinema ? 'angle-up' : 'angle-down'}
                                        size={25}
                                        color={Colors.black}
                                    />
                                </TouchableOpacity>
                                {cinemaSelected === cinema && (
                                    <View style={styles.timeDetail}>
                                        {time_fixed.map((time, index) => {
                                            return (
                                                <Text
                                                    key={index}
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
                minimumDate={new Date()}
                maximumDate={maximumDate}
            />
        </>
    );
};
