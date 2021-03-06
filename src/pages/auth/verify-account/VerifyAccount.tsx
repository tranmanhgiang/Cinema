import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './VerifyAccountStyles';
import Button from '@components/Button/Button';
import { VerifyByKey } from '@pages/auth/verify-account/component/verify-by-key/VerifyByKey';

export enum VerifyOptions {
    BY_KEY = 'byKey',
    BY_EMAIL = 'byEmail',
    BY_QUESTION = 'byQuestion',
}
export const VerifyAccount = () => {
    const [verifyByKeyValue, setVerifyByKeyValue] = useState('');

    const handleVerify = () => {
        console.log('verify');
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 40 }}>
                <VerifyByKey value={verifyByKeyValue} setValue={setVerifyByKeyValue} />
                <Button onPress={() => handleVerify()} buttonContainerStyle={styles.btn_login}>
                    <Text style={styles.txtVerify}>Verify</Text>
                </Button>
            </ScrollView>
        </View>
    );
};
