import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from '@components/AppHeader/Header';
import { WebView } from 'react-native-webview';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { Colors } from '@common/assets/theme/variables';
import { useNavigation } from '@react-navigation/native';
import styles from '../BookingTicketStyles';

export const VNPay = ({ route }: any) => {
    const { uriPayment } = route.params;
    const navigation = useNavigation();
    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
            </TouchableOpacity>
        );
    };

    const renderContentTabBar = () => <Text style={styles.txtBack}>Thanh toán</Text>;

    return (
        <>
            <View>
                <Header leftTabBar={renderLeftTabBar()} contentTabBar={renderContentTabBar()} />
            </View>
            <WebView
                source={{
                    uri: uriPayment,
                }}
            />
        </>
    );
};
