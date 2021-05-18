import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './VerifyAccountStyles';
import Button from '@components/Button/Button';
import { VerifyByKey } from '@pages/auth/verify-account/component/verify-by-key/VerifyByKey';
import api from '@common/api';
import { useNavigation } from '@react-navigation/native';
import { VERIFY_ACCOUNT_TYPE_SCREEN } from '@common/constants';
import { goToSetNewPassword } from '../set-new-password/SetNewPasswordNavigation';
import Toast from 'react-native-root-toast';
import { OptionToast, OptionToastSuccess } from '@common/assets/theme/common';
import { goToLogin } from '../login/LoginNavigation';

export enum VerifyOptions {
    BY_KEY = 'byKey',
    BY_EMAIL = 'byEmail',
    BY_QUESTION = 'byQuestion',
}

interface VerifyAccountProps {
    route: any;
}

export const VerifyAccount = ({ route }: VerifyAccountProps) => {
    const navigation = useNavigation();
    const [verifyByKeyValue, setVerifyByKeyValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleVerify = async () => {
        if (route.params.type === VERIFY_ACCOUNT_TYPE_SCREEN.SIGN_UP) {
            const { lastName, firstName, email, phone, password, hash } = route.params;
            const formSignUp = {
                firstName,
                lastName,
                email,
                phone,
                password,
                verifyCode: verifyByKeyValue,
                hash,
            };
            try {
                setLoading(true);
                await api.auth.signUp(formSignUp);
                setLoading(false);
                Toast.show('Đăng ký thành công', OptionToastSuccess);
                goToLogin(navigation);
            } catch (error) {
                setLoading(false);
                Toast.show('Mã xác thực không chính xác', OptionToast);
            }
        } else if (route.params.type === VERIFY_ACCOUNT_TYPE_SCREEN.RESET_PASSWORD) {
            try {
                setLoading(true);
                await api.auth.verifyCodeForgotPassword({
                    verifyCode: verifyByKeyValue,
                    hash: route.params.hash,
                });
                setLoading(false);
                goToSetNewPassword(navigation, { email: route.params.email });
            } catch (error) {
                setLoading(false);
                Toast.show('Mã xác thực không chính xác', OptionToast);
            }
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 40 }}>
                <VerifyByKey value={verifyByKeyValue} setValue={setVerifyByKeyValue} type={route.params.type} />
                <Button loading={loading} onPress={() => handleVerify()} buttonContainerStyle={styles.btn_login}>
                    <Text style={styles.txtVerify}>Xác nhận</Text>
                </Button>
            </ScrollView>
        </View>
    );
};
