import common, { OptionToast } from '@common/assets/theme/common';
import { Colors } from '@common/assets/theme/variables';
import { ImageUrls, ScenesKey } from '@common/constants';
import Header from '@components/AppHeader/Header';
import Button from '@components/Button/Button';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import styles from '../BookingTicketStyles';
import { formatOrderByDate } from '@common/utils/time';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '@common/redux/rootReducer';
import api from '@common/api';
import Toast from 'react-native-root-toast';
import { getErrorMessage } from '@common/utils/detectErrorApi';
import dayjs from 'dayjs';
import { formatCurrency } from '@common/utils/formatCurrency';
import { getBookTicketHistory, getCurrentUser } from '@services/user/actions';
import { checkCurrentPosition } from '@common/utils';

const defaultCouponApply = {
    type: 1,
    value: 0,
    name: '',
};

export const Payment = ({ route }: any) => {
    const { bookingTime, bookingDate, filmId, filmName, cinemaSelected, price } = route.params;

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const ticket = useSelector((state: GlobalState) => state.ticket);
    const userProfile = useSelector((state: GlobalState) => state.user.userProfile);

    const [loading, setLoading] = useState<boolean>(false);
    const [listCoupons, setListCoupons] = useState<any[]>([]);
    const [paymentMethodSelected, setPaymentMethodSelected] = useState('visa');
    const [actualPrice, setActualPrice] = useState<number>(price);
    const [couponApply, setCouponApply] = useState<{ type: number; value: number; name: string }>(defaultCouponApply);
    const [popcornDrinks, setPopcornDrinks] = useState<string>('');
    const [popcornDrinksId, setPopcornDrinksId] = useState<string>('');
    const [emailFriends, setEmailFriends] = useState<string>('');
    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
                <Text style={styles.txtBack}>Tr??? v???</Text>
            </TouchableOpacity>
        );
    };

    const getCoupons = async () => {
        try {
            const res = await api.user.getCoupons();
            if (res.message === 'true') {
                const newData: any = [];
                res.data.map((coupon: any) => {
                    if (!coupon.memberRole || coupon.memberRole <= checkCurrentPosition(userProfile.purchased)) {
                        newData.push(coupon);
                    }
                });
                setListCoupons(newData);
            }
        } catch (error) {
            Toast.show(getErrorMessage(error), OptionToast);
        }
    };

    const onSelectedCoupon = (item: number | string) => {
        const couponItem = listCoupons.find((coupon) => coupon.id === item || coupon.couponCode === item);
        if (couponItem) {
            if (!couponItem.filmId || couponItem.filmId === filmId) {
                setCouponApply({ type: couponItem.couponType, value: couponItem.values, name: couponItem.name });
            } else {
                setTimeout(() => {
                    Toast.show('M?? gi???m gi?? kh??ng ??p d???ng cho phim n??y', OptionToast);
                }, 2000);
            }
        } else {
            setCouponApply(defaultCouponApply);
            setTimeout(() => {
                Toast.show('M?? gi???m gi?? kh??ng t???n t???i', OptionToast);
            }, 2000);
        }
    };

    const getInfoTopping = () => {
        let topping = '';
        let toppingId = '';
        ticket.topping.map((item) => {
            if (item.quantity) {
                topping += `${item.name} x${item.quantity} ${'\n'}`;
                toppingId += `${item.id},`;
            }
        });
        const newToppingId = toppingId.slice(0, toppingId.length - 1);
        setPopcornDrinks(topping);
        setPopcornDrinksId(newToppingId);
    };

    const bookTicket = async () => {
        try {
            await api.user.delSeatChosen();
            const formBookTicket = {
                price: actualPrice,
                code: formatOrderByDate(),
                date: bookingDate,
                time: bookingTime,
                filmId,
                theaterId: cinemaSelected,
                seat: ticket.seats,
                popcornId: popcornDrinksId.length > 0 ? popcornDrinksId : '0',
            };
            await api.user.bookTicket(formBookTicket);
            if (emailFriends.length > 0) {
                await api.cinema.sendEmailInviteFriends({
                    email: emailFriends,
                    content: `<div>Phim: ${filmName}</div>
                <div>Th???i gian: ${dayjs(bookingTime).format('HH:mm')}h</div>
                <div>Ng??y ${dayjs(bookingDate).format('DD-MM-YYYY')}</div>
                <div>R???p ${cinemaSelected}</div>`,
                });
            }
            dispatch(getCurrentUser());
            dispatch(getBookTicketHistory());
        } catch (error) {
            Toast.show(getErrorMessage(error), OptionToast);
        }
    };

    const paymentVNPay = async () => {
        setLoading(true);
        try {
            const responsePayment = await api.cinema.paymentVNPay({ amount: actualPrice });
            setLoading(false);
            navigation.navigate(ScenesKey.VN_PAY, { uriPayment: responsePayment.data });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getCoupons();
        getInfoTopping();
    }, []);

    useEffect(() => {
        if (couponApply.type !== undefined && couponApply.type) {
            setActualPrice(actualPrice - couponApply.value);
        } else if (couponApply.type !== undefined && !couponApply.type) {
            const calculatePrice = (actualPrice * (100 - couponApply.value)) / 100;
            setActualPrice(Math.round(calculatePrice * 100) / 100);
        }
    }, [couponApply]);

    return (
        <>
            <Header leftTabBar={renderLeftTabBar()} />
            <ScrollView>
                <View style={[styles.payment, common.shadow]}>
                    <Text style={styles.txtYourBooking}>TH??NG TIN V??</Text>
                    <Text>Phim: {filmName}</Text>
                    <Text>
                        Th???i gian: {dayjs(parseInt(bookingTime, 10)).format('HH:mm')}h ng??y {dayjs(bookingDate).format('DD-MM-YYYY')} R???p{' '}
                        {cinemaSelected}
                    </Text>
                    <Text>S??? l?????ng: {ticket.seats.length} v??</Text>
                    <Text>S??? gh???: {ticket.seats.map((seat) => seat.name + ' ')}</Text>
                    <Text>B???ng & n?????c: {popcornDrinks}</Text>
                    <Text style={styles.txtTotal}>T???NG TI???N</Text>
                    <Text style={styles.priceForPayment}>{formatCurrency(actualPrice)} vn??</Text>
                </View>
                <View style={styles.makePayment}>
                    <Text style={styles.txtMakePayment}>THANH TO??N</Text>
                    <Text style={styles.lineStyle} />
                    <Text onPress={() => {}}>Nh???p email c???a b???n b??, ch??ng t??i s??? g???i th??ng tin v?? cho h???</Text>
                    <TextInput placeholder="Email" style={styles.inputField} onChangeText={(text) => setEmailFriends(text)} />
                </View>
                <View style={styles.voucher}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon type={VectorIconName.FontAweSome} name="ticket" size={18} color={Colors.black} />
                        <Text style={styles.txtTitle}> {couponApply.name.length ? couponApply.name : 'Cinema Voucher'}</Text>
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => {
                            setActualPrice(price);
                            navigation.navigate(ScenesKey.COUPON, { listCoupons, filmId, onSelectedCoupon });
                        }}
                    >
                        {!couponApply.name.length ? (
                            <>
                                <Text>Ch???n ho???c nh???p m??</Text>
                                <Icon type={VectorIconName.Entypo} name="chevron-right" size={18} color={Colors.black} />
                            </>
                        ) : (
                            <Icon type={VectorIconName.FontAweSome} name="check" size={20} color={Colors.lawnGreen} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.paymentMethod}>
                    <Text>PH????NG TH???C THANH TO??N</Text>
                    <Text style={styles.lineStyleFullWidth} />
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => setPaymentMethodSelected('visa')}>
                            <Image source={ImageUrls.VN_PAY} style={paymentMethodSelected === 'visa' ? styles.cardSelected : styles.cardPayment} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPaymentMethodSelected('masterCard')}>
                            <Image
                                source={ImageUrls.MASTER_CARD}
                                style={paymentMethodSelected === 'masterCard' ? styles.cardSelected : styles.cardPayment}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPaymentMethodSelected('payPal')}>
                            <Image source={ImageUrls.PAY_PAL} style={paymentMethodSelected === 'payPal' ? styles.cardSelected : styles.cardPayment} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btnField}>
                    <Button
                        loading={loading}
                        onPress={() => {
                            paymentVNPay();
                            bookTicket();
                        }}
                        buttonContainerStyle={styles.buttonPayNow}
                    >
                        <Text style={styles.txtPayNow}>Thanh to??n</Text>
                    </Button>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.txtCancel}>H???y ?????t v??</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};
