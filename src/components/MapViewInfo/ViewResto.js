import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import { COLORS, FONTS, icons, SIZES, } from "../../constants"

const ViewResto = ({ el }) => {

    if (el.photo)
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 25,
                    left: 0,
                    right: 0,
                    height: 150,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        height: 150,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding / 2,
                        paddingHorizontal: SIZES.padding / 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: "rgba(30, 30, 30, 0.9)",
                        borderRadius: 20,
                    }}
                >
                    
                    <Image
                        source={el.photo}
                        style={{
                            flex: 1,
                            height: "94%",
                            width: "35%",
                            marginLeft: 5,
                            justifyContent: 'center',
                            backgroundColor: COLORS.secondary,
                            borderRadius: 20,
                        }}
                    />
                    <View
                        style={{
                            flex: 2,
                            height: "100%",
                            padding: 10,
                            justifyContent: 'center',
                            display: 'flex',
                            direction: 'column',
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                height: "94%",
                                width: "100%",
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h4,
                                    color: COLORS.white,
                            }}
                            >Restaurants Hotel</Text>
                        </View>


                        <View
                            style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "row",
                                height: "100%",
                                width: "100%",
                                justifyContent: 'flex-start',
                            }}
                        >
                            {[0, 1, 2, 3, 4].map((el, i) => (
                                <Image
                                    key={i}
                                    source={icons.star}
                                    style={{
                                        marginLeft: 3,
                                        width: 15,
                                        height: 15,
                                    }}
                                />
                            ))}
                        </View>

                        <View
                            style={{
                                flex: 2,
                                height: "100%",
                                width: "100%",
                                justifyContent: "space-between",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    backgroundColor: COLORS.white,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 10,
                                    
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.h4,
                                        color: COLORS.black,
                                }}
                                > Details</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    flex: 1.2,
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    width: "90%",
                                    height: "100%",
                                    borderRadius: 10,
                                    
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.body1,
                                        fontSize: 13,
                                        color: COLORS.darkgray,
                                    }}
                                >
                                    from $199 / night
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View
                            style={{
                                position: 'absolute',
                                top: -20,
                                left: -15,
                                borderRadius: 5,
                        }}>
                      <Image 
                        source={el.icon}
                        style={{
                            width: 50,
                            height: 50,
                        }}
                      />
                      </View>
                    <View
                    style={{
                        position: 'absolute',
                        top: -30,
                        left: 0,
                        borderRadius: 5,
                  }}>
                     <Text style={{
                          ...FONTS.h4,
                          fontSize: 24,
                          top: 0,
                          left: 27,
                          color: COLORS.white,
                          padding: 7,
                          textShadowColor: 'rgba(255, 255, 255, 0.8)',
                          textShadowOffset: {width: -1, height: 1},
                          textShadowRadius: 10
                    }}>{el?.name}</Text>
                    </View>

                </View>
            </View>
        ) 
    else return (<></>)

}

export default ViewResto;