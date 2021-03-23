import common from "@common/assets/theme/common";
import { Colors } from "@common/assets/theme/variables";
import { ScenesKey } from "@common/constants";
import { GlobalState } from "@common/redux/rootReducer";
import Header from "@components/AppHeader/Header";
import { Seats } from "@components/Seats/Seats";
import Icon, { VectorIconName } from "@components/VectorIcon/VectorIcon";
import { useNavigation } from "@react-navigation/native";
import { resetCheckout } from "@services/cinema/actions";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "../BookingTicketStyles";

export const ChooseSeats = ({ route }: any) => {
    const { film } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const price = useSelector((state: GlobalState) => state.ticket.price);
    const [isVisibleBuyTicket, setIsVisibleBuyTicket] = useState(false);

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
            <View style={{ flex: 1, justifyContent: 'center' }}>
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
                            <Text style={styles.price}>$ {price}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buy}
                            onPress={() => {
                                // dispatch(resetCheckout());
                                navigation.navigate(ScenesKey.PAYMENT);
                            }}
                        >
                            <Text style={styles.txtBuy}>Buy</Text>
                            <Icon
                                type={VectorIconName.FontAweSome}
                                name="arrow-right"
                                size={20}
                                color={Colors.black}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </>
    );
};
