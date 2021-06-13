import { Colors } from '@common/assets/theme/variables';
import Header from '@components/AppHeader/Header';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './CouponStyles';
import Button from '@components/Button/Button';
import { CouponItem } from './CouponItem';

export const Coupon = ({ route }: any) => {
    const { listCoupons, filmId, onSelectedCoupon } = route.params;

    const navigation = useNavigation();
    const [isSelected, setSelection] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [loadingBtnApply, setLoadingBtnApply] = useState(false);
    const [couponCodeValue, setCouponCodeValue] = useState<string>('');

    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
                <Text style={styles.txtBack}>Chọn Cinema Voucher</Text>
            </TouchableOpacity>
        );
    };

    const onPressConfirm = () => {
        if (isSelected) {
            onSelectedCoupon(isSelected);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.goBack();
        }, 2000);
    };

    const onPressApply = () => {
        if (couponCodeValue.length) {
            onSelectedCoupon(couponCodeValue);
        }
        setLoadingBtnApply(true);
        setTimeout(() => {
            setLoadingBtnApply(false);
            navigation.goBack();
        }, 2000);
    };

    return (
        <>
            <Header styleHeader={styles.header} leftTabBar={renderLeftTabBar()} />
            <View style={styles.enterVoucher}>
                <TextInput
                    value={couponCodeValue}
                    onChangeText={(text) => setCouponCodeValue(text)}
                    placeholder="Nhập mã cinema voucher"
                    style={styles.inputField}
                />
                <Button
                    loading={loadingBtnApply}
                    onPress={onPressApply}
                    disabled={!couponCodeValue.length}
                    buttonContainerStyle={couponCodeValue.length ? styles.apply : styles.applyDisable}
                >
                    <Text style={styles.txtApply}>Áp dụng</Text>
                </Button>
            </View>
            <View style={[styles.listVoucher, { paddingBottom: isSelected ? 180 : 0 }]}>
                <View style={styles.title}>
                    <Text style={styles.txtAll}>Tất cả</Text>
                    <Text>Có thể chọn 1</Text>
                </View>
                <ScrollView>
                    {listCoupons.map((voucher: any, index: number) => {
                        return (
                            <CouponItem
                                key={index}
                                voucher={voucher}
                                setSelection={setSelection}
                                isSelected={isSelected}
                                canSelected={!voucher.filmId || voucher.filmId === filmId}
                            />
                        );
                    })}
                </ScrollView>
            </View>
            {isSelected ? (
                <View style={{ width: '97%', position: 'absolute', bottom: 0, zIndex: 10 }}>
                    <Button loading={loading} onPress={onPressConfirm} buttonContainerStyle={styles.apply}>
                        <Text style={styles.txtApply}>Đồng ý</Text>
                    </Button>
                </View>
            ) : (
                <></>
            )}
        </>
    );
};
