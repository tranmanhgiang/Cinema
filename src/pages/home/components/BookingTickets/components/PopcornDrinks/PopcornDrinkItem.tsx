import Button from '@components/Button/Button';
import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './PopcornDrinkStyles';

interface PopcornDrinkItem {
    item: any;
    addPopcornDrink: (id: number, newQuantity: number) => void;
}

export const PopcornDrinkItem = ({ item, addPopcornDrink }: PopcornDrinkItem) => {
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        addPopcornDrink(item.id, quantity);
    }, [quantity]);
    return (
        <View style={styles.comboContainer}>
            <View style={{ flex: 1 }}>
                <Image source={{ uri: item.imageUrl }} style={{ width: 80, height: 80 }} />
            </View>
            <View style={{ flex: 3 }}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <View style={styles.actionContainer}>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={() => {
                                setQuantity(quantity + 1);
                            }}
                            buttonContainerStyle={styles.actionButtonIncrease}
                        >
                            <Text style={styles.txtButton}>+</Text>
                        </Button>
                        <Button
                            onPress={() => {
                                if (quantity > 0) {
                                    setQuantity(quantity - 1);
                                }
                            }}
                            buttonContainerStyle={styles.actionButtonDecrease}
                        >
                            <Text style={styles.txtButton}>-</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    );
};
