import { Colors, SCREEN_WIDTH } from "@common/assets/theme/variables";
import React from "react";
import { Image, View, Text } from "react-native";
import Icon, { VectorIconName } from "@components/VectorIcon/VectorIcon";
import styles from "./NowShowingStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

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

export const NowShowing = () => {
    const FilmItem = ({ item, index }: FilmItemProps) => {
        return (
            <View style={{ padding: 16 }}>
                <View key={index}>
                    <Image source={{ uri: item.imgUrl }} style={styles.image} />
                </View>
                <View style={styles.infoFilm}>
                    <View style={styles.leftInfo}>
                        <Text style={styles.filmName}>{item.name}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon
                                type={VectorIconName.FontAweSome}
                                name="star"
                                size={15}
                                color={Colors.orange}
                            />
                            <Icon
                                type={VectorIconName.FontAweSome}
                                name="star"
                                size={15}
                                color={Colors.orange}
                            />
                            <Icon
                                type={VectorIconName.FontAweSome}
                                name="star"
                                size={15}
                                color={Colors.orange}
                            />
                            <Icon
                                type={VectorIconName.FontAweSome}
                                name="star-o"
                                size={15}
                                color={Colors.orange}
                            />
                            <Icon
                                type={VectorIconName.FontAweSome}
                                name="star-o"
                                size={15}
                                color={Colors.orange}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bookingTicket}>
                        <Text style={styles.txtTicket}>Ticket</Text>
                        <Icon
                            type={VectorIconName.FontAweSome}
                            name="long-arrow-right"
                            size={18}
                            color={Colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {data_fixed.map((data, index) => {
                return <FilmItem key={index} item={data} index={index} />;
            })}
        </View>
    );
};
