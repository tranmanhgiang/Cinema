import React, { useEffect, useState } from 'react';
import {
    NativeSyntheticEvent,
    Text,
    TextInput,
    TextInputChangeEventData,
    TextInputProps,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

import styles from './TextInputStyles';
import { EyeSlash, Eye } from '@common/assets/images/svg';
import { Colors } from '@common/assets/theme/variables';

export interface TextInputComponentProps {
    inputType?: InputType;
    label?: string;
    children?: React.ReactNode;
    value: string;
    isPassValueFromChild?: boolean;
    handleChange: (e: any) => void;
    error?: any;
    errorStyle?: TextStyle;
    touched?: any;
    handleBlur?: (e: any) => void;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    addOns?: React.ReactNode;
    secureText?: boolean;
    isSecureText?: boolean;
    formatCharacters?: RegExp | undefined;
    placeholderStyle?: TextStyle;
    containerStyles?: ViewStyle;
    errorCheckOutSide?: boolean;
    errorCheckOutSideValue?: string;
    isMultiline?: boolean;
    onToggleSecure?: (secure: boolean) => void;
}
type Props = TextInputComponentProps & TextInputProps;

export enum InputType {
    NORMAL = 'NORMAL',
    WITH_VALIDATION = 'WITH_VALIDATION',
}

const TextInputComponent = ({
    inputType = InputType.NORMAL,
    label,
    value,
    isPassValueFromChild = false,
    secureText,
    handleChange,
    error,
    errorStyle,
    touched,
    handleBlur,
    addOns,
    style,
    onChange,
    formatCharacters,
    placeholderStyle,
    placeholder,
    containerStyles = {},
    errorCheckOutSide,
    errorCheckOutSideValue,
    isMultiline = false,
    onToggleSecure,
    isSecureText = false,
    ...rest
}: Props): React.ReactElement => {
    const [secure, toggleSecure] = useState(isSecureText);
    const [inputValue, setInputValue] = useState(value);
    const [isPlaceholder, setIsPlaceholder] = useState(value !== undefined ? value.length === 0 : false);

    useEffect(() => {
        if (value === '') {
            setInputValue('');
            setIsPlaceholder(true);
        }
        if (isPassValueFromChild && value !== '') {
            setInputValue(value);
            setIsPlaceholder(false);
        }
    }, [value, isPassValueFromChild]);

    const getInputStyles = (isTouched: boolean | undefined, errorMessage: string | undefined) => {
        let inputStyles = {};
        inputStyles = style || styles.textInput;

        if (isPlaceholder && placeholderStyle) {
            inputStyles = { ...inputStyles, ...placeholderStyle };
        }

        if (isTouched && errorMessage && inputType === InputType.WITH_VALIDATION) {
            inputStyles = {
                ...styles.textInputError,
                ...inputStyles,
            };
        }
        return inputStyles;
    };

    const handleChangeText = (text: string) => {
        if (formatCharacters && !formatCharacters.test(text)) {
            if (text.length === 1) {
                setInputValue('');
            }
            return;
        }
        setInputValue(text);
        handleChange(text);
    };

    const onClickEyeIcon = () => {
        if (onToggleSecure) {
            onToggleSecure(!secure);
        }
        toggleSecure(!secure);
    };

    const handleChangeInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setIsPlaceholder(e.nativeEvent.text.length === 0);
        if (onChange) {
            onChange(e);
        }
    };

    const SecureIcon = secure ? EyeSlash : Eye;

    return (
        <>
            {label && <Text style={styles.labelInput}>{label}</Text>}
            <View style={[styles.container, containerStyles]}>
                {addOns}
                <TextInput
                    multiline={isMultiline}
                    value={inputValue}
                    onChangeText={handleChangeText}
                    onChange={handleChangeInput}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    style={getInputStyles(touched, error)}
                    secureTextEntry={secure}
                    selectionColor={Colors.gray}
                    {...rest}
                />
                {secureText && (
                    <TouchableOpacity onPress={onClickEyeIcon} style={styles.touchableEye}>
                        <SecureIcon style={styles.iconEye} />
                    </TouchableOpacity>
                )}
            </View>
            {touched && error && <Text style={[styles.errText, errorStyle]}>{error}</Text>}
            {errorCheckOutSide && <Text style={[styles.errText, errorStyle]}>{errorCheckOutSideValue}</Text>}
        </>
    );
};
export default TextInputComponent;
