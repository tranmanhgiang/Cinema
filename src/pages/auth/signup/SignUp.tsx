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
import styles from "./SignUpStyles";
import { goToVerifyAccount } from '@pages/auth/verify-account/VerifyAccountNavigation';
import { ImageUrls } from "@common/constants";
import { Colors } from "@common/assets/theme/variables";
import common from "@common/assets/theme/common";

export interface FormLogin {
  Username: string;
  Password: string;
}

interface LoginProps {
  navigation: any;
}

export const SignUp = ({ navigation }: LoginProps): React.ReactElement => {
  const hidePassword = true;
  const loading = false;

  const handleInputFocus = () => {
    console.log("focus");
  };

  const getRequestSubmit = async (values: any) => {
    console.log(values);
    goToVerifyAccount(navigation);
  };

  const getInitialValues = () => {
    return {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    };
  };

  const getValidationSchema = () => {
    return Yup.object().shape({
      FirstName: Yup.string().required("FirstName required"),
      LastName: Yup.string().required("LastName required"),
      Email: Yup.string().email().required("This field is required"),
      Password: Yup.string().required("Password required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password")], "Passwords does not match")
        .required("This field is required"),
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flexGrow: 1 }}
    >
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
                  <View style={[styles.section, common.shadow]}>
                    <View style={styles.inputBox}>
                      <TextInputComponent
                        value={values.FirstName}
                        handleChange={handleChange("FirstName")}
                        error={errors.FirstName}
                        touched={touched.FirstName}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("FirstName")}
                        placeholder="First Name"
                        placeholderTextColor={Colors.veryBrightGrey}
                        style={styles.inputTextSignUp}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                    <View style={styles.inputBox}>
                      <TextInputComponent
                        value={values.LastName}
                        handleChange={handleChange("LastName")}
                        error={errors.LastName}
                        touched={touched.LastName}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("LastName")}
                        placeholder="Last Name"
                        placeholderTextColor={Colors.veryBrightGrey}
                        style={styles.inputTextSignUp}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                    <View style={styles.inputBox}>
                      <TextInputComponent
                        value={values.Email}
                        handleChange={handleChange("Email")}
                        error={errors.Email}
                        touched={touched.Email}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("Email")}
                        placeholder="Email"
                        placeholderTextColor={Colors.veryBrightGrey}
                        style={styles.inputTextSignUp}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                    <View style={styles.inputBox}>
                      <TextInputComponent
                        value={values.Password}
                        handleChange={handleChange("Password")}
                        error={errors.Password}
                        touched={touched.Password}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("Password")}
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
                        value={values.ConfirmPassword}
                        handleChange={handleChange("ConfirmPassword")}
                        error={errors.ConfirmPassword}
                        touched={touched.ConfirmPassword}
                        onFocus={handleInputFocus}
                        inputType={InputType.WITH_VALIDATION}
                        handleBlur={handleBlur("ConfirmPassword")}
                        secureText={true}
                        isSecureText={hidePassword}
                        placeholder="Confirm Password"
                        placeholderTextColor={Colors.veryBrightGrey}
                        style={styles.inputTextSignUp}
                        errorStyle={styles.inputErrorText}
                      />
                    </View>
                  </View>
                  <Button
                    onPress={() => handleSubmit()}
                    loading={loading}
                    buttonContainerStyle={styles.buttonSignIn}
                  >
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
