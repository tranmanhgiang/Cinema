import common from "@common/assets/theme/common";
import { Colors } from "@common/assets/theme/variables";
import { ImageUrls } from "@common/constants";
import Header from "@components/AppHeader/Header";
import Button from "@components/Button/Button";
import Icon, { VectorIconName } from "@components/VectorIcon/VectorIcon";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Image } from "react-native";
import Modal from 'react-native-modal';
import Barcode from 'react-native-barcode-svg';

import styles from "../BookingTicketStyles";
import { formatOrderByDate } from "@common/utils/time";

export const Payment = () => {
    const navigation = useNavigation();
    const [paymentMethodSelected, setPaymentMethodSelected] = useState('visa');
    const [isModalVisible, setIsModalVisible] = useState(false);
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
    return (
        <>
            <Header leftTabBar={renderLeftTabBar()} />
            <ScrollView>
                <View style={[styles.payment, common.shadow]}>
                    <Text style={styles.txtYourBooking}>YOUR BOOKING</Text>
                    <Text>Movie: ABC</Text>
                    <Text>TMG-Cinema 20:10 on 06/05/2021 Cinema 1</Text>
                    <Text>Quantity: 2 tickets</Text>
                    <Text>Seats: 10, 11</Text>
                    <Text style={styles.txtTotal}>TOTAL</Text>
                    <Text style={styles.priceForPayment}>$ 100</Text>
                </View>
                <View style={styles.makePayment}>
                    <Text style={styles.txtMakePayment}>Make Payment</Text>
                    <Text style={styles.lineStyle} />
                    <Text>Enter email & phone number, we will send your ticket here.</Text>
                    <TextInput placeholder="Email" style={ styles.inputField }/>
                    <TextInput placeholder="Phone number" style={ styles.inputField }/>
                </View>
                <View style={styles.paymentMethod}>
                    <Text>PAYMENT METHOD</Text>
                    <Text style={styles.lineStyleFullWidth} />
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => setPaymentMethodSelected('visa')}>
                            <Image source={ImageUrls.VISA} style={paymentMethodSelected === 'visa' ? styles.cardSelected : styles.cardPayment} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPaymentMethodSelected('masterCard')}>
                            <Image source={ImageUrls.MASTER_CARD} style={paymentMethodSelected === 'masterCard' ? styles.cardSelected : styles.cardPayment} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPaymentMethodSelected('payPal')}>
                            <Image source={ImageUrls.PAY_PAL} style={paymentMethodSelected === 'payPal' ? styles.cardSelected : styles.cardPayment} />
                        </TouchableOpacity>
                    </View>
                    {paymentMethodSelected !== 'payPal' 
                        ? (
                        <>
                            <TextInput placeholder="1234-1234-1324-1234" style={ styles.inputField }/>
                            <TextInput placeholder="Name on Card" style={ styles.inputField }/>
                            <View style={styles.moreInfoCard}>
                                <TextInput placeholder="MM/YYYY" style={ styles.cvc }/>
                                <TextInput placeholder="CVC" style={ styles.cvc }/>
                                <Image source={ImageUrls.CVC} style={styles.cvcImage} />
                            </View>
                        </>
                        ) 
                        : (
                            <Text>
                                You will be redirected to PayPal.com website to process your order. You are able to use your PayPal balance or Credit Card.
                            </Text>
                        )
                    }
                </View>
                <View style={styles.btnField}>
                    <Button
                        onPress={() => { setIsModalVisible(true)}}
                        buttonContainerStyle={styles.buttonPayNow}
                    >
                        <Text style={styles.txtPayNow}>Pay Now</Text>
                    </Button>
                    <TouchableOpacity onPress={() => console.log('cancel booking')}>
                        <Text style={styles.txtCancel}>Cancel Booking</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal 
                isVisible={isModalVisible}
                backdropColor="#B4B3DB"
                backdropOpacity={0.8}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.headerModal}>Successfully</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={ImageUrls.SUCCESS} style={styles.successLogo} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>You've just booked tickets successfully. You will find your tickets on your email.</Text>
                        <View style={styles.inFoTicket}>
                            <View>
                                <Text style={styles.title}>THEATER</Text>
                                <Text>Cinema 1</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>DATE</Text>
                                <Text>06/05/1999</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>TIME</Text>
                                <Text>20:00</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Barcode value={formatOrderByDate()} maxWidth={250} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 3 }}></Text>
                            <Text onPress={() => setIsModalVisible(false)} style={styles.txtOK}>OK</Text>
                        </View>
                    </View>
            </Modal>
        </>
    );
};
