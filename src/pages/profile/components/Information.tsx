import { Colors } from '@common/assets/theme/variables';
import Button from '@components/Button/Button';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import styles from '../ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { GlobalState } from '@common/redux/rootReducer';
import { useSelector } from 'react-redux';

export const Information = () => {
    const navigation = useNavigation();
    const userProfile = useSelector((state: GlobalState) => state.user.userProfile);
    console.log('userProfile: ', userProfile);

    const [userName, setUserName] = useState(userProfile.lastName + ' ' + userProfile.firstName);
    const [bookingDate, setBookingDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const showDatePicker = () => {
        if (isEditing) {
            setDatePickerVisibility(true);
        }
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setBookingDate(date);
        hideDatePicker();
    };

    return (
        <>
            <View>
                <Image source={require('@common/assets/images/bgau.jpg')} style={styles.imageCover} />
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Icon type={VectorIconName.Feather} name="arrow-left" size={25} color={Colors.white} />
                </TouchableOpacity>
                <View style={{ marginVertical: 5, flexDirection: 'row', position: 'absolute', bottom: 10, left: 10 }}>
                    <TouchableOpacity
                        style={styles.avatar}
                        onPress={() => {
                            console.log('change avatar');
                        }}
                    >
                        {/* <Icon containerStyle={styles.iconPerson} type={VectorIconName.Ionicons} name="person-outline" size={40} color={Colors.red} /> */}
                        <Image source={require('@common/assets/images/bgau.jpg')} style={styles.avtImage} />
                        <Icon containerStyle={styles.iconCamera} type={VectorIconName.FontAweSome} name="camera" size={8} color={Colors.black} />
                    </TouchableOpacity>
                    <View style={styles.txtInfo}>
                        <Text style={styles.name}>{userProfile.lastName + ' ' + userProfile.firstName}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.information}>
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>UserName </Text>
                    <TextInput editable={isEditing} style={styles.info} onChangeText={setUserName} value={userName} placeholder="User name" />
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.title}>Giới tính </Text>
                    <Text style={styles.info}>Nam</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.title}>Ngày sinh </Text>
                    <Text style={styles.info} onPress={showDatePicker}>
                        06/05/1999
                    </Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.title}>Email </Text>
                    <Text style={styles.info}>{userProfile.email}</Text>
                </View>
                <View style={styles.infoLastItem}>
                    <Text style={styles.title}>Điện thoại </Text>
                    <View style={styles.info}>
                        <Text style={styles.text}>0{userProfile.phone}</Text>
                        <Text style={styles.text}>
                            Chỉ có bạn mới có thể nhìn thấy số điện thoại này. Chúng tôi sẽ không công khai số điện thoại của bạn ra bên ngoài
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnField}>
                <Button
                    onPress={() => {
                        setIsEditing(!isEditing);
                    }}
                    buttonContainerStyle={styles.buttonEditProfile}
                >
                    <Text style={styles.txtEditProfile}>{isEditing ? 'Cập nhật' : 'Đổi thông tin'}</Text>
                </Button>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                maximumDate={new Date()}
            />
        </>
    );
};
