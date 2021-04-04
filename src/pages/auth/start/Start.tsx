import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '@components/Button/Button';
import styles from './StartStyles';
import { ImageUrls } from '@common/constants';
import { goToLogin } from '@pages/auth/login/LoginNavigation';
import { goToSignUp } from '@pages/auth/signup/SignUpNavigation';

interface Props {
    navigation: any;
}

export const Start = ({ navigation }: Props) => {
    const onSignIn = () => {
        goToLogin(navigation);
    };
    const onSignUp = () => {
        goToSignUp(navigation);
    };

    return (
        <ImageBackground source={ImageUrls.BACKGROUND} style={styles.background}>
            <View style={{ flexGrow: 1 }}>
                <View style={styles.logoField}>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.welcome}>to our cinema</Text>
                </View>
                <View style={styles.buttonField}>
                    <Button onPress={() => onSignIn()} buttonContainerStyle={styles.buttonSignIn}>
                        <Text style={styles.txtSignIn}>Log In</Text>
                    </Button>
                    <Button onPress={() => onSignUp()} buttonContainerStyle={styles.buttonSignUp}>
                        <Text style={styles.txtSignUp}>Sign Up</Text>
                    </Button>
                </View>
            </View>
        </ImageBackground>
    );
};
