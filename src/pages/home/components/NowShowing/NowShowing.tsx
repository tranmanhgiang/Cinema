import { Colors, SCREEN_WIDTH } from '@common/assets/theme/variables';
import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import styles from './NowShowingStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ScenesKey, FILM_DETAIL_TYPE_SCREEN, listFilmsDefault } from '@common/constants';
import api from '@common/api';
import { ListFilmsResponse } from '@common/api/ApiTypes';
import { getTokenStorage } from '@common/utils/storage';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

export interface FilmItemProps {
    item: any;
    index: number;
}

export const NowShowing = () => {
    const navigation = useNavigation();
    const [listFilms, setListFilms] = useState<ListFilmsResponse>(listFilmsDefault);
    const getListFilms = async () => {
        const newListFilms = await api.cinema.getListFilms();
        console.log(newListFilms);

        setListFilms(newListFilms);
    };

    const getTokenFromStorage = async (item: any) => {
        const tokenStorage = await getTokenStorage();
        if (tokenStorage !== null) {
            navigation.navigate(ScenesKey.BOOKING_TICKETS, { film: item });
        } else {
            navigation.navigate(ScenesKey.LOGIN);
        }
    };

    useEffect(() => {
        getListFilms();
    }, []);
    const FilmItem = ({ item, index }: FilmItemProps) => {
        return (
            <View style={{ padding: 16 }}>
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        navigation.navigate(ScenesKey.FILM_DETAIL, { film: item, type: FILM_DETAIL_TYPE_SCREEN.CAN_BOOK_TICKET });
                    }}
                >
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.infoFilm}>
                    <View style={styles.leftInfo}>
                        <Text style={styles.filmName}>{item.filmName}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon type={VectorIconName.FontAweSome} name="star" size={15} color={Colors.orange} />
                            <Icon type={VectorIconName.FontAweSome} name="star" size={15} color={Colors.orange} />
                            <Icon type={VectorIconName.FontAweSome} name="star" size={15} color={Colors.orange} />
                            <Icon type={VectorIconName.FontAweSome} name="star-o" size={15} color={Colors.orange} />
                            <Icon type={VectorIconName.FontAweSome} name="star-o" size={15} color={Colors.orange} />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.bookingTicket}
                        onPress={() => {
                            getTokenFromStorage(item);
                        }}
                    >
                        <Text style={styles.txtTicket}>Đặt vé</Text>
                        <Icon type={VectorIconName.FontAweSome} name="long-arrow-right" size={18} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {listFilms.data.map((data, index) => {
                return <FilmItem key={index} item={data} index={index} />;
            })}
        </View>
    );
};
