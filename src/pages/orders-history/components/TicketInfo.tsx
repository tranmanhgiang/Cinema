import dayjs from 'dayjs';
import React from 'react';
import { Text, View } from 'react-native';
import Barcode from 'react-native-barcode-svg';
import styles from './../OrdersHistoryStyles';

interface TicketInfoProps {
    onOk: () => void;
    ticketItem: any;
}

export const TicketInfo = ({ onOk, ticketItem }: TicketInfoProps) => {
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.headerModal}>Thông tin vé</Text>
            <Text style={styles.guide}>Đưa thông tin này để nhân viên checkin và nhận vé khi đến rạp.</Text>
            <View style={styles.inFoTicket}>
                <View>
                    <Text style={styles.titleInfo}>RẠP</Text>
                    <Text>{ticketItem.name}</Text>
                </View>
                <View>
                    <Text style={styles.titleInfo}>NGÀY</Text>
                    <Text>{ticketItem.date}</Text>
                </View>
                <View>
                    <Text style={styles.titleInfo}>GIỜ</Text>
                    <Text>{dayjs(parseInt(ticketItem.time, 10)).format('HH:mm A')}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Barcode value={ticketItem.code} maxWidth={250} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ flex: 3 }} />
                <Text onPress={() => onOk()} style={styles.txtOK}>
                    OK
                </Text>
            </View>
        </View>
    );
};
