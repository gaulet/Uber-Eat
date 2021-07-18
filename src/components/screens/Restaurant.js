import React, {useState} from "react";
import Restau from '../../components/Restaurant'

const Restaurant = ({ route, navigation }, ...props) => {
    return (
       <Restau navigation={navigation} route={route} {...props}></Restau>
    )
}

export default Restaurant;