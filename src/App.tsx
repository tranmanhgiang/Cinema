import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './Navigator';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});

const MyApp = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View style={styles.safeArea}>
            <Navigator />
        </View>
    );
};

export default MyApp;
