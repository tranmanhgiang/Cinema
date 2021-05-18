import dayjs from 'dayjs';
import { Radio } from 'native-base';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './CouponStyles';

interface CouponItemProp {
    voucher: any;
    isSelected: number;
    setSelection: React.Dispatch<React.SetStateAction<number>>;
}

export const CouponItem = ({ voucher, setSelection, isSelected }: CouponItemProp) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => setSelection(voucher.id)}>
            <Image source={{ uri: voucher.imageUrl }} style={styles.imgVoucher} />
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
                <View style={styles.voucherDescription}>
                    <Text style={styles.voucherName}>{voucher.name}</Text>
                    <View style={styles.voucherCode}>
                        <Text style={styles.txtVoucherCode}>{voucher.couponCode}</Text>
                    </View>
                    <Text>Hạn sử dụng: {dayjs(parseInt(voucher.endDate, 10)).format('DD.MM.YYYY')}</Text>
                </View>
                <Radio selected={isSelected === voucher.id} selectedColor="red" color="red" />
            </View>
        </TouchableOpacity>
    );
};
