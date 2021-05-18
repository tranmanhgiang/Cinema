import api from '@common/api';
import { PopcornItem, ToppingType } from '@common/api/ApiTypes';
import { addToppingSuccess } from '@services/cinema/actions';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { PopcornDrinkItem } from './PopcornDrinkItem';

export const PopcornDrinks = () => {
    const dispatch = useDispatch();
    const [popcornDrinkArr, setPopcornDrinkArr] = useState<ToppingType[]>([]);
    const [listPopcornDrinks, setListPopcornDrinks] = useState<PopcornItem[]>([]);

    const getPopcorns = async () => {
        try {
            const res = await api.user.getPopcorns();
            if (res.message === 'true') {
                setListPopcornDrinks(res.data);
                const arr: ToppingType[] = [];
                res.data.map((item) => {
                    arr.push({ quantity: 0, id: item.id, name: item.name, price: item.price });
                });
                setPopcornDrinkArr(arr);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addPopcornDrink = (itemId: number, newQuantity: number) => {
        if (popcornDrinkArr.length > 0) {
            const newItems = [...popcornDrinkArr];
            const itemIndex = newItems.findIndex((item) => item.id === itemId);
            newItems[itemIndex].quantity = newQuantity;
            dispatch(addToppingSuccess({ topping: newItems }));
            setPopcornDrinkArr(newItems);
        }
    };

    useEffect(() => {
        getPopcorns();
    }, []);

    return (
        <ScrollView>
            {listPopcornDrinks.map((item, index) => {
                return <PopcornDrinkItem key={index} item={item} addPopcornDrink={addPopcornDrink} />;
            })}
        </ScrollView>
    );
};
