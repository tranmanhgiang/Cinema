import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Formik, FormikProps } from "formik";
import TextInputComponent, { InputType } from "@components/TextInput/TextInput";
import * as Yup from "yup";
import Button from "@components/Button/Button";
import styles from "./LoginStyles";
import { Colors } from "@common/assets/theme/variables";
import { ImageUrls, ScenesKey } from "@common/constants";
import { goToDashboard } from '@pages/auth/verify-account/VerifyAccountNavigation';
import { NavigationProps } from "@common/types";

export interface FormLogin {
  Email: string;
  Password: string;
}

interface LoginProps {
  navigation: NavigationProps;
}

export const Login = ({ navigation }: LoginProps): React.ReactElement => {
  const hidePassword = true;
  const loading = false;

  const handleInputFocus = () => {
    console.log("focus");
  };

  const getRequestSubmit = async () => {
    goToDashboard(navigation);
  };

  const getInitialValues = () => {
    return { email: "", password: "" };
  };

  const getValidationSchema = () => {
    return Yup.object().shape({
      email: Yup.string().email().required("This field is required"),
      password: Yup.string().required("This field is required"),
    });
  };

  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flexGrow: 1 }}
      >
        <View style={styles.logoField}>
          <Image source={ImageUrls.LOGO} style={styles.logo} />
        </View>
        <View style={styles.buttonField}>
          <ScrollView>
            <Text style={styles.text}>Login</Text>
            <Formik
              enableReinitialize={true}
              initialValues={getInitialValues()}
              onSubmit={() => getRequestSubmit()}
              validationSchema={getValidationSchema()}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }: FormikProps<any>) => {
                return (
                  <>
                    <View style={styles.inputBox}>
                      <TextInputComponent
                        value={values.email}
                        handleChange={handleChange("email")}
                        error={errors.email}
                        touched={touched.email}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("email")}
                        placeholder="Email"
                        placeholderTextColor={Colors.veryBrightGrey}
                        style={styles.inputTextLogin}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                    <View style={styles.inputBox}>
                      <TextInputComponent
                        value={values.password}
                        handleChange={handleChange("password")}
                        error={errors.password}
                        touched={touched.password}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("password")}
                        secureText={true}
                        isSecureText={hidePassword}
                        placeholder="Password"
                        placeholderTextColor={Colors.veryBrightGrey}
                        style={styles.inputTextLogin}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                    <Button
                      onPress={() => handleSubmit()}
                      loading={loading}
                      buttonContainerStyle={styles.buttonSignIn}
                    >
                      <Text style={styles.txtSignIn}>Log In</Text>
                    </Button>
                  </>
                );
              }}
            </Formik>
            <View style={styles.signUpField}>
              <Text 
                onPress={() => navigation.navigate(ScenesKey.RESET_PASSWORD)} 
                style={styles.forgotPassword}>Forgot Password?</Text>
              <Text
                onPress={() => navigation.navigate(ScenesKey.SIGN_UP)}
                style={styles.bottomText}
              >
                Don't have a account? <Text style={styles.makerSignUp}>Sign up here</Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
