import { Colors } from '@common/assets/theme/variables';
import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './FilmDetailStyles';
import common from '@common/assets/theme/common';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import Header from '@components/AppHeader/Header';
import { useNavigation } from '@react-navigation/native';
import { FILM_DETAIL_TYPE_SCREEN } from '@common/constants';

export const FilmDetail = ({ route }: any) => {
    const { film, type } = route.params;
    const navigation = useNavigation();

    const renderLeftTabBar = () => {
        return (
            <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.goBack()}>
                <Icon type={VectorIconName.FontAweSome} name="arrow-left" size={18} color={Colors.black} />
                <Text style={styles.txtBack}>Trở về</Text>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <Header leftTabBar={renderLeftTabBar()} />
            <ScrollView>
                <View style={[styles.itemContainer, common.shadow]}>
                    <View>
                        <Image source={{ uri: film.imageUrl }} style={styles.image} />
                    </View>
                    <View style={styles.details}>
                        <View style={styles.topDescriptions}>
                            <Text style={styles.filmName}>{film.filmName}</Text>
                            {type === FILM_DETAIL_TYPE_SCREEN.CAN_BOOK_TICKET && (
                                <TouchableOpacity style={styles.bookingTicket}>
                                    <Text style={styles.txtTicket}>Đặt vé</Text>
                                    <Icon type={VectorIconName.FontAweSome} name="long-arrow-right" size={18} color={Colors.white} />
                                </TouchableOpacity>
                            )}
                        </View>
                        <Text style={styles.descriptions}>{film.description}</Text>
                    </View>
                </View>
                <View style={[styles.itemContainer, common.shadow]}>
                    <View style={styles.fieldInfo}>
                        <Text>
                            <Text style={styles.time}>Thời lượng:</Text> {film.duration}
                        </Text>
                    </View>
                    <View style={styles.fieldInfo}>
                        <Text>
                            <Text style={styles.time}>Khở chiếu:</Text> {film.releaseDate}
                        </Text>
                    </View>
                    <View style={styles.fieldInfo}>
                        <Text>
                            <Text style={styles.time}>Thể loại:</Text> abc
                        </Text>
                    </View>
                    <View style={styles.fieldInfo}>
                        <Text>
                            <Text style={styles.time}>Tác giả:</Text> {film.author}
                        </Text>
                    </View>
                    <View style={styles.fieldInfo}>
                        <Text>
                            <Text style={styles.time}>Diễn viên:</Text> {film.actors}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};
