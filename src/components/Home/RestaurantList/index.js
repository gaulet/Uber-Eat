import React from "react";
import {
    StyleSheet,
    FlatList
} from "react-native";

import { SIZES, COLORS, } from '../../../constants'
import Item from './Item'

const RestaurantList = ({ navigation, getCategoryNameById, restaurants, currentLocation}) => {

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={Item({navigation, getCategoryNameById, currentLocation})}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default RestaurantList;