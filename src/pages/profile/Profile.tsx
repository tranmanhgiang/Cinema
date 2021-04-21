import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Header from '@components/AppHeader/Header';
import styles from './ProfileStyles';
import { ScenesKey, TOKEN_STORAGE_KEY } from '@common/constants';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { Colors } from '@common/assets/theme/variables';
import common from '@common/assets/theme/common';
import Button from '@components/Button/Button';
import StepIndicator from 'react-native-step-indicator';
import { useNavigation } from '@react-navigation/native';
import { logoutAction } from '@services/auth/actions';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '@services/user/actions';
import { GlobalState } from '@common/redux/rootReducer';

export const Profile = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userProfile = useSelector((state: GlobalState) => state.user.userProfile);
    console.log(userProfile);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, []);
    const sourceUri = false;
    const renderContentTabBar = () => <Text style={styles.contentTabBar}>Tài khoản</Text>;
    const renderRightTabBar = () => {
        return (
            <Text>
                <Icon containerStyle={styles.iconPerson} type={VectorIconName.Feather} name="settings" size={20} color={Colors.black} />;
            </Text>
        );
    };
    const labels = ['0 đ', '1 500 000 đ', '2 000 000 đ', '4 000 000 đ'];
    const getStepIndicatorIconConfig = ({ position, stepStatus }: { position: number; stepStatus: string }) => {
        const iconConfig = {
            name: 'feed',
            color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
            size: 15,
        };
        switch (position) {
            case 0: {
                iconConfig.name = 'shopping-cart';
                break;
            }
            case 1: {
                iconConfig.name = 'location-on';
                break;
            }
            case 2: {
                iconConfig.name = 'assessment';
                break;
            }
            case 3: {
                iconConfig.name = 'payment';
                break;
            }
            case 4: {
                iconConfig.name = 'track-changes';
                break;
            }
            default: {
                break;
            }
        }
        return iconConfig;
    };
    const customStyles = {
        stepIndicatorSize: 35,
        currentStepIndicatorSize: 35,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013',
    };
    const renderStepIndicator = (params: any) => {
        return (
            <Icon
                containerStyle={styles.iconPerson}
                type={VectorIconName.MaterialIcons}
                name={getStepIndicatorIconConfig(params).name}
                size={getStepIndicatorIconConfig(params).size}
                color={getStepIndicatorIconConfig(params).color}
            />
        );
    };

    return (
        <ScrollView>
            <Header contentTabBar={renderContentTabBar()} rightTabBar={renderRightTabBar()} />
            {!!userProfile.id && (
                <View style={styles.overViewContainer}>
                    <View style={styles.overView}>
                        <View style={{ marginVertical: 5, flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.avatar}
                                onPress={() => {
                                    console.log('change avatar');
                                }}
                            >
                                {!sourceUri && (
                                    <Icon
                                        containerStyle={styles.iconPerson}
                                        type={VectorIconName.Ionicons}
                                        name="person-outline"
                                        size={40}
                                        color={Colors.red}
                                    />
                                )}
                                <Icon
                                    containerStyle={styles.iconCamera}
                                    type={VectorIconName.FontAweSome}
                                    name="camera"
                                    size={8}
                                    color={Colors.black}
                                />
                            </TouchableOpacity>
                            <View style={styles.txtInfo}>
                                <Text>{userProfile.lastName + ' ' + userProfile.firstName}</Text>
                                <Text>Gold</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Icon containerStyle={styles.qrCode} type={VectorIconName.FontAweSome} name="qrcode" size={35} color={Colors.black} />
                            <Text>Mã thành viên</Text>
                        </View>
                    </View>
                    <View style={styles.tab}>
                        <TouchableOpacity
                            style={styles.tabItem}
                            onPress={() => {
                                navigation.navigate(ScenesKey.EDIT_INFORMATION);
                            }}
                        >
                            <Icon
                                containerStyle={styles.iconPerson}
                                type={VectorIconName.FontAweSome}
                                name="pencil-square-o"
                                size={20}
                                color={Colors.red}
                            />
                            <Text style={styles.txtItem}>Thông tin</Text>
                        </TouchableOpacity>
                        <View style={styles.middleItem}>
                            <Icon
                                containerStyle={styles.iconPerson}
                                type={VectorIconName.FontAweSome}
                                name="check-circle"
                                size={20}
                                color={Colors.red}
                            />
                            <Text style={styles.txtItem}>Tích điểm</Text>
                        </View>
                        <View style={styles.tabItem}>
                            <Icon containerStyle={styles.iconPerson} type={VectorIconName.FontAweSome} name="gift" size={20} color={Colors.red} />
                            <Text style={styles.txtItem}>Đổi quà</Text>
                        </View>
                    </View>
                </View>
            )}
            {!!userProfile.id && (
                <View style={[styles.expenditureContainer, common.shadow]}>
                    <View style={styles.expenditureSection}>
                        <View style={styles.expenditure}>
                            <Text>Chi tiêu năm 2021</Text>
                            <Icon
                                containerStyle={styles.exclamationIcon}
                                type={VectorIconName.FontAweSome}
                                name="exclamation"
                                size={18}
                                color={Colors.black}
                            />
                        </View>
                        <Text>3.000.000 đ</Text>
                    </View>
                    <View style={styles.progressMember}>
                        <StepIndicator
                            renderStepIndicator={renderStepIndicator}
                            customStyles={customStyles}
                            currentPosition={1}
                            stepCount={4}
                            labels={labels}
                        />
                    </View>
                </View>
            )}
            <View style={styles.supportSection}>
                <View style={[styles.support, common.shadow]}>
                    <Text style={styles.supportField}>
                        Gọi ĐƯỜNG DÂY NÓNG: <Text style={styles.infoSupport}>123456</Text>
                    </Text>
                    <Icon
                        containerStyle={styles.exclamationIcon}
                        type={VectorIconName.FontAweSome}
                        name="angle-right"
                        size={25}
                        color={Colors.black}
                    />
                </View>
                <View style={[styles.support, common.shadow]}>
                    <Text style={styles.supportField}>
                        Email: <Text style={styles.infoSupport}>testCinema99@gmail.com</Text>
                    </Text>
                    <Icon
                        containerStyle={styles.exclamationIcon}
                        type={VectorIconName.FontAweSome}
                        name="angle-right"
                        size={25}
                        color={Colors.black}
                    />
                </View>
                <View style={[styles.support, common.shadow]}>
                    <Text style={styles.supportField}>Câu hỏi thường gặp</Text>
                    <Icon
                        containerStyle={styles.exclamationIcon}
                        type={VectorIconName.FontAweSome}
                        name="angle-right"
                        size={25}
                        color={Colors.black}
                    />
                </View>
            </View>
            {!!userProfile.id && (
                <View>
                    <Button
                        onPress={() => {
                            AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
                            dispatch(logoutAction());
                            navigation.navigate(ScenesKey.HOME);
                        }}
                        buttonContainerStyle={styles.buttonLogout}
                    >
                        <Text style={styles.txtLogout}>Đăng xuất</Text>
                    </Button>
                </View>
            )}
        </ScrollView>
    );
};
