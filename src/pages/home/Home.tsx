import React, { useEffect } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '@components/AppHeader/Header';
import { Colors } from '@common/assets/theme/variables';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import styles from './HomeStyles';
import { ImageUrls } from '@common/constants';
import { Suggests } from './components/Suggests/Suggests';
import { ComingSoon } from './components/ComingSoon/ComingSoon';
import { NowShowing } from './components/NowShowing/NowShowing';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '@services/user/actions';
import { GlobalState } from '@common/redux/rootReducer';
import { resetCheckout } from '@services/cinema/actions';
import { useNavigation } from '@react-navigation/native';
import { goToLogin } from '@pages/auth/login/LoginNavigation';

export const Home = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userProfile = useSelector((state: GlobalState) => state.user.userProfile);

    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(resetCheckout());
    }, []);

    const renderLeftTabBar = () => <Text style={styles.txtLeftTabBar}>Hi, {userProfile.lastName ? userProfile.lastName : 'Guest'}</Text>;
    const renderRightTabBar = () => {
        return (
            <View style={{ marginVertical: 5 }}>
                <TouchableOpacity
                    style={styles.avatar}
                    onPress={() => {
                        if (!userProfile.id) {
                            goToLogin(navigation);
                        }
                    }}
                >
                    {userProfile.id ? (
                        // <Image source={ImageUrls.LOGO} style={styles.imageView} />
                        <Image source={require('@common/assets/images/pop1.jpeg')} style={styles.imageView} />
                    ) : (
                        <Icon containerStyle={styles.iconPerson} type={VectorIconName.Ionicons} name="person-outline" size={40} color={Colors.red} />
                    )}
                    <Icon containerStyle={styles.iconCamera} type={VectorIconName.FontAweSome} name="camera" size={8} color={Colors.black} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView>
            <Header leftTabBar={renderLeftTabBar()} rightTabBar={renderRightTabBar()} />
            <ScrollView style={{ marginBottom: 55 }}>
                <View style={styles.section}>
                    <Text style={styles.title}>Gợi ý</Text>
                    <Suggests />
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Đang chiếu</Text>
                    <NowShowing />
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Sắp chiếu</Text>
                    <ComingSoon />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
