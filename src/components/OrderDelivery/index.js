import React, { useState} from "react";
import {
    View,
} from "react-native";

import Map from '../Map'
import DeliveryInfo from "./DeliveryInfo";
import DestinationHeader from "./DestinationHeader";

const OrderDelivery = ({ route, navigation }) => {

    const [duration, setDuration] = useState(0)
   
    return (
        <View style={{ flex: 1 }}>
            <Map route={route} setDuration={setDuration}>
                <DestinationHeader duration={duration} streetName={route.params.currentLocation.streetName} />
                <DeliveryInfo restaurant={route.params.restaurant} navigation={navigation}/>
            </Map>
           
        </View>
    )
}

export default OrderDelivery;