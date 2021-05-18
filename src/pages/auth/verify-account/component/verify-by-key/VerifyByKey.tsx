import { VERIFY_ACCOUNT_TYPE_SCREEN } from '@common/constants';
import React from 'react';
import { View, Text } from 'react-native';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';
import styles from './VerifyByKeyStyles';
export const VerifyByKey = (props: any) => {
    const CELL_COUNT = 6;
    const { value, setValue, type } = props;
    const [rest, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={{ alignItems: 'center' }}>
            {type === VERIFY_ACCOUNT_TYPE_SCREEN.SIGN_UP ? (
                <Text style={styles.title}>Hoàn tất quá trình đăng ký của bạn bằng mã xác thực</Text>
            ) : (
                <Text style={styles.title}>Xác nhận đặt lại mật khẩu</Text>
            )}
            <Text style={styles.subTitle}>Nhập mã 6 chữ số được gửi về email của bạn</Text>
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
