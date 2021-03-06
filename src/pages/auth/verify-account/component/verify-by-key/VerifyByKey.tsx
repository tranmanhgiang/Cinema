import React from 'react';
import { View, Text } from 'react-native';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';
import styles from './VerifyByKeyStyles';
export const VerifyByKey = (props: any) => {
    const CELL_COUNT = 6;
    const { value, setValue } = props;
    const [rest, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>Complete your sign up using the authenticator app</Text>
            <Text style={styles.subTitle}>Enter the 6 ditgit code provided by the app</Text>
            <CodeField
                {...rest}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
        </View>
    );
};
