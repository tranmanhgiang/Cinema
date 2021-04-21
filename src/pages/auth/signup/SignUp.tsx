import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Formik, FormikProps } from 'formik';
import TextInputComponent, { InputType } from '@components/TextInput/TextInput';
import * as Yup from 'yup';
import Button from '@components/Button/Button';
import styles from './SignUpStyles';
import { goToVerifyAccount } from '@pages/auth/verify-account/VerifyAccountNavigation';
import { ImageUrls, VERIFY_ACCOUNT_TYPE_SCREEN } from '@common/constants';
import { Colors } from '@common/assets/theme/variables';
import common, { OptionToast } from '@common/assets/theme/common';
import api from '@common/api';
import Toast from 'react-native-root-toast';

interface SignUpProps {
    navigation: any;
}

export const SignUp = ({ navigation }: SignUpProps): React.ReactElement => {
    const hidePassword = true;
    const [loading, setLoading] = useState(false);

    const handleInputFocus = () => {
        console.log('focus');
    };

    const getRequestSubmit = async (values: any) => {
        try {
            setLoading(true);
            const res = await api.auth.sendEmailGetVerifyCode({
                email: values.email,
            });
            if (res.success === 'true') {
                setLoading(false);
                goToVerifyAccount(navigation, {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    password: values.password,
                    hash: res.hash,
                    type: VERIFY_ACCOUNT_TYPE_SCREEN.SIGN_UP,
                });
            } else {
                setLoading(false);
                Toast.show('Email đã tồn tại', OptionToast);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            Toast.show('Email đã tồn tại', OptionToast);
        }
    };

    const getInitialValues = () => {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        };
    };

    const getValidationSchema = () => {
        return Yup.object().shape({
            firstName: Yup.string().required('FirstName required'),
            lastName: Yup.string().required('LastName required'),
            email: Yup.string().email().required('This field is required'),
            phone: Yup.string().required('This field is required'),
            password: Yup.string().required('Password required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords does not match')
                .required('This field is required'),
        });
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flexGrow: 1 }}>
            <View style={styles.logoField}>
                <Image source={ImageUrls.LOGO} style={styles.logo} />
            </View>
            <View style={styles.buttonField}>
                <ScrollView>
                    <Text style={styles.text}>Sign Up</Text>
                    <Formik
                        enableReinitialize={true}
                        initialValues={getInitialValues()}
                        onSubmit={(values) => getRequestSubmit(values)}
                        validationSchema={getValidationSchema()}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }: FormikProps<any>) => {
                            return (
                                <>
                                    <View style={[styles.section, common.shadow]}>
                                        <View style={styles.inputBox}>
                                            <TextInputComponent
                                                value={values.firstName}
                                                handleChange={handleChange('firstName')}
                                                error={errors.firstName}
                                                touched={touched.firstName}
                                                onFocus={handleInputFocus}
                                                inputType={InputType.WITH_VALIDATION}
                                                handleBlur={handleBlur('firstName')}
                                                placeholder="First Name"
                                                placeholderTextColor={Colors.veryBrightGrey}
                                                style={styles.inputTextSignUp}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                        <View style={styles.inputBox}>
                                            <TextInputComponent
                                                value={values.lastName}
                                                handleChange={handleChange('lastName')}
                                                error={errors.lastName}
                                                touched={touched.lastName}
                                                onFocus={handleInputFocus}
                                                inputType={InputType.WITH_VALIDATION}
                                                handleBlur={handleBlur('lastName')}
                                                placeholder="Last Name"
                                                placeholderTextColor={Colors.veryBrightGrey}
                                                style={styles.inputTextSignUp}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                        <View style={styles.inputBox}>
                                            <TextInputComponent
                                                value={values.email}
                                                handleChange={handleChange('email')}
                                                error={errors.email}
                                                touched={touched.email}
                                                onFocus={handleInputFocus}
                                                inputType={InputType.WITH_VALIDATION}
                                                handleBlur={handleBlur('email')}
                                                placeholder="email"
                                                placeholderTextColor={Colors.veryBrightGrey}
                                                style={styles.inputTextSignUp}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                        <View style={styles.inputBox}>
                                            <TextInputComponent
                                                value={values.phone}
                                                handleChange={handleChange('phone')}
                                                error={errors.phone}
                                                touched={touched.phone}
                                                onFocus={handleInputFocus}
                                                inputType={InputType.WITH_VALIDATION}
                                                handleBlur={handleBlur('phone')}
                                                placeholder="phone"
                                                placeholderTextColor={Colors.veryBrightGrey}
                                                style={styles.inputTextSignUp}
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
                                                style={styles.inputTextSignUp}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                        <View style={styles.inputBox}>
                                            <TextInputComponent
                                                value={values.confirmPassword}
                                                handleChange={handleChange('confirmPassword')}
                                                error={errors.confirmPassword}
                                                touched={touched.confirmPassword}
                                                onFocus={handleInputFocus}
                                                inputType={InputType.WITH_VALIDATION}
                                                handleBlur={handleBlur('confirmPassword')}
                                                secureText={true}
                                                isSecureText={hidePassword}
                                                placeholder="Confirm Password"
                                                placeholderTextColor={Colors.veryBrightGrey}
                                                style={styles.inputTextSignUp}
                                                errorStyle={styles.inputErrorText}
                                            />
                                        </View>
                                    </View>
                                    <Button onPress={() => handleSubmit()} loading={loading} buttonContainerStyle={styles.buttonSignIn}>
                                        <Text style={styles.txtSignUp}>Sign up</Text>
                                    </Button>
                                </>
                            );
                        }}
                    </Formik>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
};
