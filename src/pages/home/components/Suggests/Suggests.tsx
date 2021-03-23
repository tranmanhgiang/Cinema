import { SCREEN_WIDTH } from "@common/assets/theme/variables";
import { FILM_DETAIL_TYPE_SCREEN, ScenesKey } from "@common/constants";
import React from "react";
import { Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import styles from "./SuggestStyles";

export const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.6);

const data_fixed = [
    {
        name: "Aenean leo",
        body:
            "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD",
    },
    {
        name: "In turpis",
        body:
            "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P",
    },
    {
        name: "Lorem Ipsum",
        body:
            "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl:
            "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
    },
    {
        name: "Lorem Ipsum",
        body:
            "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl:
            "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg",
    },
    {
        name: "Lorem Ipsum",
        body:
            "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl:
            "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
    },
];

export interface FilmItemProps {
    item: any;
    index: number;
}

export const Suggests = () => {
    const navigation = useNavigation();
    const FilmItem = ({ item, index }: FilmItemProps) => {
        return (
            <>
                <TouchableOpacity style={styles.container} key={index}
                    onPress=
                    {() => {
                        navigation.navigate(ScenesKey.FILM_DETAIL, {
                            film: item,
                            type: FILM_DETAIL_TYPE_SCREEN.CAN_BOOK_TICKET,
                        });
                    }}>
                    <Image source={{ uri: item.imgUrl }} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.filmName}>{item.name}</Text>
            </>
        );
    };
    const isCarousel = React.useRef(null);

    return (
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data_fixed}
                renderItem={FilmItem}
                sliderWidth={SCREEN_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
                loop={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
            />
        </View>
    );
};
