import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    SafeAreaView,
    Animated
} from "react-native";

import { COLORS } from '../../constants'
import Header from './Header'
import FoodInfo from './FoodInfo'
import Order from './Order'

const Restaurant = ({ route, navigation }) => {

    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = useState(null);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        let { item } = route.params;
        setRestaurant(item)
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header restaurant={restaurant} navigation={navigation}/>
            <FoodInfo restaurant={restaurant} scrollX={scrollX} orderItems={orderItems} setOrderItems={setOrderItems}/>
            <Order route={route} navigation={navigation} scrollX={scrollX} orderItems={orderItems} restaurant={restaurant}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant;