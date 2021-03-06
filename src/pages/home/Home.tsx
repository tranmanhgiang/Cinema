import React from "react";
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import Header from "@components/AppHeader/Header";
import { Colors } from "@common/assets/theme/variables";
import Icon, { VectorIconName } from "@components/VectorIcon/VectorIcon";
import styles from "./HomeStyles";
import { ImageUrls } from "@common/constants";
import { Suggests } from "./components/Suggests/Suggests";
import { ComingSoon } from "./components/ComingSoon/ComingSoon";
import { NowShowing } from "./components/NowShowing/NowShowing";

export const Home = () => {
    const sourceUri = false;
    const renderLeftTabBar = () => (
        <Text style={styles.txtLeftTabBar}>Hi, Tran!</Text>
    );
    const renderRightTabBar = () => {
        return (
            <View style={{ marginVertical: 5 }}>
                <TouchableOpacity
                    style={styles.avatar}
                    onPress={() => {
                        console.log("change avatar");
                    }}
                >
                    {!!sourceUri && (
                        <Image
                            source={ImageUrls.LOGO}
                            style={styles.imageView}
                        />
                    )}
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
            </View>
        );
    };

    return (
        <SafeAreaView>
            <Header
                leftTabBar={renderLeftTabBar()}
                rightTabBar={renderRightTabBar()}
            />
            <ScrollView style={{ marginBottom: 55 }}>
                <View style={styles.section}>
                    <Text style={styles.title}>Suggests</Text>
                    <Suggests />
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Now Showing</Text>
                    <NowShowing />
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Coming Soon</Text>
                    <ComingSoon />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
