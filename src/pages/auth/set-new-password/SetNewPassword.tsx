import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Formik, FormikProps } from "formik";
import TextInputComponent, { InputType } from "@components/TextInput/TextInput";
import * as Yup from "yup";
import Button from "@components/Button/Button";
import { Colors } from "@common/assets/theme/variables";
import styles from "./SetNewPasswordStyles";
import { goToVerifyAccount } from '@pages/auth/verify-account/VerifyAccountNavigation';
import { NavigationProps, RouteNavigationProps } from "@common/types";

export interface ForgotPasswordValues {
  password: string;
  confirmPassword: string;
}

interface SetNewPasswordProps {
  navigation: NavigationProps;
  route: RouteNavigationProps;
}

export const SetNewPassword = ({ navigation, route }: SetNewPasswordProps): React.ReactElement => {
  const hidePassword = true;
  const loading = false;

  const handleInputFocus = () => {
    console.log("focus");
  };

  const getRequestSubmit = async (values: ForgotPasswordValues) => {
    const formForgotPassword = {
      email: route.params.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    console.log(formForgotPassword);
    goToVerifyAccount(navigation);
  };

  const getInitialValues = () => {
    return { password: "", confirmPassword: "" };
  };

  const getValidationSchema = () => {
    return Yup.object().shape({
      password: Yup.string().required("Username required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords does not match")
        .required("This field is required"),
    });
  };

  return (
    <View style={styles.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flexGrow: 1 }}
      >
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
                        style={styles.inputTextPassword}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                    <View style={styles.inputBox}>
                      <TextInputComponent
                        value={values.confirmPassword}
                        handleChange={handleChange("confirmPassword")}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("confirmPassword")}
                        secureText={true}
                        isSecureText={hidePassword}
                        placeholder="Confirm Password"
                        placeholderTextColor={Colors.veryBrightGrey}
                        style={styles.inputTextPassword}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                    <Button
                      onPress={() => handleSubmit()}
                      loading={loading}
                      buttonContainerStyle={styles.buttonSubmit}
                    >
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
