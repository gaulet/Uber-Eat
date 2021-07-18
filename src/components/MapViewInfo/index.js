import React, {useRef, useState, useEffect} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';



import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../../constants"
import { useListe } from "./hook";
import HeaderSearch from "./HeaderSearch";
import ViewResto from "./ViewResto";

const MarkerRest = ({setEl}) => {
  const {restaurants} = useListe()
  
  return restaurants.map((el, index) => {
    return (

    <Marker
      key={index}
      coordinate={el.location}
      flat={true}
      anchor={{ x: 0.5, y: 0.5 }}
      onPress={() => {setEl(el)}}
    >
      <TouchableOpacity style={{
         width: 43,
         height: 43,
         backgroundColor: COLORS.white,
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 10,
      }}
      
      >
        <Image
          source={el.photo}
          style={{
              width: 37,
              height: 37,
              borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    </Marker>
    )
  })
}


const MapViewG = React.memo(({setEl}) => {
  const mapView = useRef()
  
  const updateEl = (el) => {
    setEl(el)
    mapView.current.animateCamera({center: el.location}, {duration: 200})
  }
    return (
        <MapView
          customMapStyle={mapStyle}
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          // onRegionChange={(el) => console.log(el)}
          initialRegion={ {
            "latitude": 1.5377548543367499,
            "latitudeDelta": 0.06603029839449781,
            "longitude": 110.34902092069387,
            "longitudeDelta": 0.030505433678627014,
          }}
          style={{
            width: SIZES.width,
            height: SIZES.height,
          }}
      >
          {MarkerRest({setEl: updateEl})}
          <Marker
            coordinate={{
              "latitude": 1.5377548543367499,
              "longitude": 110.34902092069387,
            }}
            flat={true}
            anchor={{ x: 0.5, y: 0.5 }}
          >
              <Image
                source={icons.red_pin}
                style={{
                    width: 43,
                    height: 43,
                    // borderRadius: 10,
                }}
              />
          </Marker>
        </MapView>
    )
})

const MapViewInfo = ({ route, navigation }) => {
    const [el, setEl] = useState({})

        return (
            <View style={{
              width: SIZES.width,
              height: SIZES.height,
             }}>
                <MapViewG setEl={setEl}/>
                <HeaderSearch navigation={navigation} />
                <ViewResto el={el}/>
            </View>
        )
}

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

export default MapViewInfo;