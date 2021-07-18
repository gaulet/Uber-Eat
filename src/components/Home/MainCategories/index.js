import React from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";

import { SIZES, FONTS } from '../../../constants'
import Item from './Item'

const MainCategories = ({ selectedCategory, categories, onSelectCategory}) => {
        return (
            <View >
                <View style={{ padding: SIZES.padding * 2 }}>
                    <Text style={{ ...FONTS.h1 }}>Main</Text>
                    <Text style={{ ...FONTS.h1 }}>Categories</Text>
                </View>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={Item({onSelectCategory, selectedCategory})}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 2
                    }}
                />
            </View>
        )
}

export default MainCategories;