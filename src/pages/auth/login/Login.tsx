import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Formik, FormikProps } from 'formik';
import TextInputComponent, { InputType } from '@components/TextInput/TextInput';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import styles from './LoginStyles';
import { Colors } from '@common/assets/theme/variables';
import { ImageUrls, ScenesKey, TOKEN_STORAGE_KEY } from '@common/constants';
import { goToDashboard } from '@pages/auth/verify-account/VerifyAccountNavigation';
import api from '@common/api';
import { NavigationProps } from '@common/types';
import { loginSuccessAction } from '@services/auth/actions';
import { useDispatch } from 'react-redux';
import { getErrorMessage } from '@common/utils/detectErrorApi';
import Toast from 'react-native-root-toast';
import { OptionToast } from '@common/assets/theme/common';
import AsyncStorage from '@react-native-community/async-storage';

export interface FormLogin {
    email: string;
    password: string;
}

interface LoginProps {
    navigation: NavigationProps;
}

export const Login = ({ navigation }: LoginProps): React.ReactElement => {
    const hidePassword = true;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const handleInputFocus = () => {
        console.log('focus');
    };

    const getRequestSubmit = async (values: FormLogin) => {
        try {
            setLoading(true);
            const loginRes = await api.auth.login({
                email: values.email,
                password: values.password,
            });
            await AsyncStorage.setItem(
                TOKEN_STORAGE_KEY,
                JSON.stringify({
                    Token: loginRes.Token,
                })
            );
            dispatch(loginSuccessAction({ username: values.email }));
            setLoading(false);
            goToDashboard(navigation);
        } catch (error) {
            setLoading(false);
            console.log(getErrorMessage(error));
            Toast.show(getErrorMessage(error), OptionToast);
        }
    };

    const getInitialValues = () => {
        return { email: '', password: '' };
    };

    const getValidationSchema = () => {
        return Yup.object().shape({
            email: Yup.string().email().required('This field is required'),
            password: Yup.string().required('This field is required'),
        });
    };

    return (
        <View style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
                <View style={styles.logoField}>
                    {/* <Image source={ImageUrls.LOGO} style={styles.logo} /> */}
                    <Text style={styles.appName}>B??n v?? online</Text>
                </View>
                <View style={styles.buttonField}>
                    <ScrollView>
                        <Text style={styles.text}>????ng nh???p</Text>
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
                                                style={styles.inputTextLogin}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                        <View style={styles.inputBox}>
                                            <TextInputComponent
                                                value={values.password}
                                                handleChange={handleChange('password')}
                                                error={errors.password}
                                                touched={touched.password}
                                                onFocus={handleInputFocus}
                                                inputType={InputType.WITH_VALIDATION}
                                                handleBlur={handleBlur('password')}
                                                secureText={true}
                                                isSecureText={hidePassword}
                                                placeholder="Password"
                                                placeholderTextColor={Colors.veryBrightGrey}
                                                style={styles.inputTextLogin}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                        <Button onPress={() => handleSubmit()} loading={loading} buttonContainerStyle={styles.buttonSignIn}>
                                            <Text style={styles.txtSignIn}>????ng nh???p</Text>
                                        </Button>
                                    </>
                                );
                            }}
                        </Formik>
                        <View style={styles.signUpField}>
                            <Text onPress={() => navigation.navigate(ScenesKey.RESET_PASSWORD)} style={styles.forgotPassword}>
                                Qu??n m???t kh???u?
                            </Text>
                            <Text onPress={() => navigation.navigate(ScenesKey.SIGN_UP)} style={styles.bottomText}>
                                Kh??ng c?? t??i kho???n? <Text style={styles.makerSignUp}>????ng k?? t???i ????y</Text>
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};
