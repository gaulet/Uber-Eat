import React, {useRef, useState, useEffect} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import ButtonInfo from './ButtonInfo'
import IconMarker from './IconMarker'
import DestMarker from './DestMarker'


import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../../constants"

const Map = ({ route, setDuration, children }) => {
    const mapView = useRef()

    const [region, setRegion] = useState(null)
    const [fromLocation, setFromLocation] = useState(null)
    const [toLocation, setToLocation] = useState(null)
    const [isReady, setIsReady] = useState(false)
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        let { restaurant, currentLocation } = route.params;

        let fromLoc = currentLocation.gps
        let toLoc = restaurant.location

        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)

    }, [])


    function calculateAngle(coordinates) {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    const onReady = (result) => {
        setDuration(result.duration)

        if (!isReady) {
            // Fit route into maps
            mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                    right: (SIZES.width / 20),
                    bottom: (SIZES.height / 4),
                    left: (SIZES.width / 20),
                    top: (SIZES.height / 8)
                }
            })

            // Reposition the car
            let nextLoc = {
                latitude: result.coordinates[0]["latitude"],
                longitude: result.coordinates[0]["longitude"]
            }

            if (result.coordinates.length >= 2) {
                let angle = calculateAngle(result.coordinates)
                setAngle(angle)
            }

            setFromLocation(nextLoc)
            setIsReady(true)
        }
    }

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    id="map12"
                    customMapStyle={mapStyle}
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={{ flex: 1 }}
                >
                    <MapViewDirections
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={4}
                        strokeColor={"rgb(201, 95, 95)"}
                        optimizeWaypoints={true}
                        onReady={onReady}
                    />
                    {toLocation?<DestMarker toLocation={toLocation} img={icons.pin}/>: <></>}
                    {fromLocation? (<IconMarker fromLocation={fromLocation} rotation={angle} img={icons.car}/>) : null}
                </MapView>
                <ButtonInfo region={region} setRegion={setRegion} mapView={mapView} />
                {children}
            </View>
        )
}

const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]

export default Map;