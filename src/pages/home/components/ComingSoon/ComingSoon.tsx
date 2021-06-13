import { Colors, SCREEN_WIDTH } from '@common/assets/theme/variables';
import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './ComingSoonStyles';
import common from '@common/assets/theme/common';
import Icon, { VectorIconName } from '@components/VectorIcon/VectorIcon';
import { useNavigation } from '@react-navigation/native';
import { FILM_DETAIL_TYPE_SCREEN, listFilmsDefault, ScenesKey } from '@common/constants';
import api from '@common/api';
import { ListFilmsResponse } from '@common/api/ApiTypes';

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

const DATA_FIXED = [
    {
        name: 'Aenean leo',
        body:
            'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD',
    },
    {
        name: 'In turpis',
        body:
            'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
        imgUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P',
    },
    {
        name: 'Lorem Ipsum',
        body:
            'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',
    },
    {
        name: 'Lorem Ipsum',
        body:
            'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
        imgUrl: 'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg',
    },
    {
        name: 'Lorem Ipsum',
        body:
            'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg',
    },
];

export interface FilmItemProps {
    item: any;
    index: number;
}

export const ComingSoon = () => {
    const navigation = useNavigation();
    const [listFilms, setListFilms] = useState<ListFilmsResponse>(listFilmsDefault);

    const getFilmsComingSoon = async () => {
        const res = await api.cinema.getFilmsComingSoon();
        if (res.message === 'true') {
            setListFilms(res);
        }
    };

    useEffect(() => {
        getFilmsComingSoon();
    }, []);

    const FilmItem = ({ item, index }: FilmItemProps) => {
        return (
            <View style={[styles.itemContainer, common.shadow]}>
                <View key={index}>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.filmName}>{item.filmName}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>
                            <Text style={styles.time}>Time:</Text> {parseInt(item.duration, 10) / 60000} phút
                        </Text>
                    </View>
                    <Text style={styles.descriptions} numberOfLines={2}>
                        {item.description}
                    </Text>
                    <TouchableOpacity
                        style={styles.viewDetail}
                        onPress={() => {
                            navigation.navigate(ScenesKey.FILM_DETAIL, { film: item, type: FILM_DETAIL_TYPE_SCREEN.CAN_NOT_BOOK_TICKET });
                        }}
                    >
                        <Text style={styles.txtDetail}>Chi tiết</Text>
                        <Icon type={VectorIconName.FontAweSome} name="long-arrow-right" size={18} color={Colors.red} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View>
            {listFilms.data.map((data, index) => {
                return <FilmItem key={index} item={data} index={index} />;
            })}
        </View>
    );
};
