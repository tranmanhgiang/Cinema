import { Colors } from '@common/assets/theme/variables';
import Button from '@components/Button/Button';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import styles from '../ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import { GlobalState } from '@common/redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import api from '@common/api';
import Toast from 'react-native-root-toast';
import { OptionToastSuccess } from '@common/assets/theme/common';
import { getCurrentUser } from '@services/user/actions';

export const Information = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userProfile = useSelector((state: GlobalState) => state.user.userProfile);
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState<{ userName: string; phone: string }>({
        userName: userProfile.lastName + ' ' + userProfile.firstName,
        phone: userProfile.phone.toString(),
    });

    const editProfile = async () => {
        try {
            const userInfo = {
                id: userProfile.id,
                firstName: ' ',
                email: userProfile.email,
                lastName: user.userName,
                phone: parseInt(user.phone, 10),
                isDeleted: 0,
            };
            const res = await api.user.editProfile(userInfo);
            if (res.message === 'true') {
                dispatch(getCurrentUser());
                navigation.goBack();
                Toast.show('Thay đổi thành công', OptionToastSuccess);
            }
        } catch (error) {
            console.log(error);
        }
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
                    <TextInput
                        editable={isEditing}
                        style={styles.info}
                        onChangeText={(e) => {
                            setUser({ ...user, userName: e });
                        }}
                        value={user.userName}
                        placeholder="User name"
                    />
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.title}>Giới tính </Text>
                    <Text style={styles.info}>Nam</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.title}>Ngày sinh </Text>
                    <Text style={styles.info}>06/05/1999</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.title}>Email </Text>
                    <Text style={styles.info}>{userProfile.email}</Text>
                </View>
                <View style={styles.infoLastItem}>
                    <Text style={styles.title}>Điện thoại </Text>
                    <View style={styles.info}>
                        <Text style={styles.phoneCode}>+84</Text>
                        <TextInput
                            keyboardType="numeric"
                            editable={isEditing}
                            style={styles.phone}
                            onChangeText={(e) => {
                                setUser({ ...user, phone: e });
                            }}
                            value={user.phone}
                            placeholder="Phone"
                        />
                        <Text style={styles.text}>
                            Chỉ có bạn mới có thể nhìn thấy số điện thoại này. Chúng tôi sẽ không công khai số điện thoại của bạn ra bên ngoài
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnField}>
                <Button
                    onPress={() => {
                        if (!isEditing) {
                            setIsEditing(!isEditing);
                        } else {
                            editProfile();
                        }
                    }}
                    buttonContainerStyle={styles.buttonEditProfile}
                >
                    <Text style={styles.txtEditProfile}>{isEditing ? 'Cập nhật' : 'Đổi thông tin'}</Text>
                </Button>
            </View>
        </>
    );
};
