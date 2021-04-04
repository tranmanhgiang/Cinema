import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Formik, FormikProps } from 'formik';
import TextInputComponent, { InputType } from '@components/TextInput/TextInput';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import { Colors } from '@common/assets/theme/variables';
import styles from './ResetPasswordStyles';
import api from '@common/api';
import { VERIFY_ACCOUNT_TYPE_SCREEN } from '@common/constants';
import { goToVerifyAccount } from '../verify-account/VerifyAccountNavigation';
import Toast from 'react-native-root-toast';
import { getErrorMessage } from '@common/utils/detectErrorApi';
import { OptionToast } from '@common/assets/theme/common';

interface ResetPasswordProps {
    navigation: any;
}

export const ResetPassword = ({ navigation }: ResetPasswordProps): React.ReactElement => {
    const [loading, setLoading] = useState(false);

    const handleInputFocus = () => {
        console.log('focus');
    };

    const getRequestSubmit = async (values: { email: string }) => {
        try {
            setLoading(true);
            const res = await api.auth.sendEmailForgotPassword({ email: values.email });
            setLoading(false);
            goToVerifyAccount(navigation, { hash: res.hash, email: values.email, type: VERIFY_ACCOUNT_TYPE_SCREEN.RESET_PASSWORD });
        } catch (error) {
            setLoading(false);
            Toast.show(getErrorMessage(error), OptionToast);
        }
    };

    const getInitialValues = () => {
        return { email: '' };
    };

    const getValidationSchema = () => {
        return Yup.object().shape({
            email: Yup.string().email().required('This field is required'),
        });
    };

    return (
        <View style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
                <View style={styles.logoField}>
                    <Text style={styles.title}>Forgot Password</Text>
                </View>
                <View style={styles.buttonField}>
                    <ScrollView>
                        <Text style={styles.text}>Please enter your email</Text>
                        <Formik
                            enableReinitialize={true}
                            initialValues={getInitialValues()}
                            onSubmit={(values) => getRequestSubmit(values)}
                            validationSchema={getValidationSchema()}
                        >
                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }: FormikProps<any>) => {
                                return (
                                    <>
                                        <View style={styles.inputBox}>
                                            <TextInputComponent
                                                value={values.email}
                                                handleChange={handleChange('email')}
                                                error={errors.email}
                                                touched={touched.email}
                                                onFocus={handleInputFocus}
                                                inputType={InputType.WITH_VALIDATION}
                                                handleBlur={handleBlur('email')}
                                                placeholder="Email"
                                                placeholderTextColor={Colors.veryBrightGrey}
                                                style={styles.inputTextEmail}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                        <Button onPress={() => handleSubmit()} loading={loading} buttonContainerStyle={styles.buttonSubmit}>
                                            <Text style={styles.txtSubmit}>Submit</Text>
                                        </Button>
                                    </>
                                );
                            }}
                        </Formik>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};
