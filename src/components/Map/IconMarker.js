import React from "react";
import { Image } from "react-native";
import { Marker } from 'react-native-maps';


const IconMarker = ({fromLocation, rotation = 0, img}) => {
    
    return (
        <Marker
            coordinate={fromLocation}
            anchor={{ x: 0.5, y: 0.5 }}
            flat={true}
            rotation={rotation}
        >
            <Image
                source={img}
                style={{
                    width: 40,
                    height: 40
                }}
            />
        </Marker>
    )
}

export default IconMarker