import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import { COLORS, FONTS, icons, SIZES, } from "../../constants"

const HeaderSearch = ({ navigation }) => {

        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 30,
                            height: 30,
                            justifyContent: 'center',
                            marginRight: SIZES.padding
                        }}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Image
                            source={icons.nearby}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <Text style={{ ...FONTS.body3 }}>{"Search"}</Text>
                    </View>

                    <Text style={{ ...FONTS.body3 }}>{"20"} mins</Text>
                </View>
            </View>
        )

}

export default HeaderSearch;