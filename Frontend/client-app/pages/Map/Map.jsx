import { Dimensions, Text, View } from "react-native";
import MapView,{PROVIDER_GOOGLE, Marker, LatLng} from 'react-native-maps';
import styles from "./styles";
import { GOOGLE_API_KEY } from "../../Credentials/credentials";
import { useEffect, useState } from "react";
import MapViewDirections from 'react-native-maps-directions';
import Buttons from "../../components/Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Map = ({navigation, route})=>{
    const [location, setLocation]= useState(useSelector((state)=>state.user.geo_location));
    const [showDirections, setShowDirections]=useState(false);
    const {width, height} = Dimensions.get("window");
    const dest = {
        latitude : route.params.service.geo_location.coordinates[0],
        longitude: route.params.service.geo_location.coordinates[1]
    }
    const ASPECT_RATIO = width/height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA =LATITUDE_DELTA*ASPECT_RATIO;
    const INITIAL_POSITION={
        latitude : dest.latitude,
        longitude: dest.longitude,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA
    }
    return(
        <View style={styles.root}>
            <View style={styles.mapContainer}>
                <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={INITIAL_POSITION}>
                    <Marker coordinate={dest}/>
                <Marker coordinate={location}/>
                {showDirections &&<MapViewDirections 
                origin={location}
                destination={dest}
                apikey={GOOGLE_API_KEY}/>}
                </MapView>
                <View style={styles.btn}>
                    <Buttons
                    title={'SHOW DIRECTIONS'}
                    onClick={()=>{setShowDirections(true)}}/>
                </View>
            </View>
            
        </View>
        );
}

export default Map;