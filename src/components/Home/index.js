import React, {useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
} from "react-native";

import { COLORS, } from '../../constants'

import Header from "./Header";
import MainCategories from "./MainCategories";
import RestaurantList from "./RestaurantList";
import { useListe, useCategory } from './hook'

const Home = ({ navigation }) => {

    const { restaurantData } = useListe()
    const { categoryData } = useCategory()

    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const [categories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData)
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)


    const onSelectCategory = (category) => {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }

    const getCategoryNameById = (id) => {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header currentLocation={currentLocation} navigation={navigation}/>
            <MainCategories selectedCategory={selectedCategory} categories={categories} onSelectCategory={onSelectCategory}/>
            <RestaurantList getCategoryNameById={getCategoryNameById} navigation={navigation} restaurants={restaurants} currentLocation={currentLocation}/>
        </SafeAreaView>
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

export default Home;