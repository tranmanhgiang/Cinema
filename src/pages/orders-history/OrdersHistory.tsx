import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Header from '@components/AppHeader/Header';

export const OrdersHistory = () => {
    const renderContentTabbar = () => <Text>Cinema</Text>;

    return (
        <SafeAreaView>
            <Header contentTabBar={renderContentTabbar()} />
            <Text>Orders History</Text>
        </SafeAreaView>
    );
};