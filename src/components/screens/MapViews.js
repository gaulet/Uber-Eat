import React from "react";
import MapsViewInfo from '../../components/MapViewInfo'

const MapViews = ({ route, navigation }, ...props) => {
    return (
       <MapsViewInfo navigation={navigation} route={route} {...props}></MapsViewInfo>
    )
}

export default MapViews;