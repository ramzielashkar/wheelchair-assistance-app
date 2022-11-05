import { Dimensions, Text, View } from "react-native";
import MapView,{PROVIDER_GOOGLE, Marker, LatLng} from 'react-native-maps';
import styles from "./styles";
import { GOOGLE_API_KEY } from "../../Credentials/credentials";
import { useState } from "react";
const Map = ()=>{
    const [location, setLocation]= useState('');
    const {width, height} = Dimensions.get("window");
    const ASPECT_RATIO = width/height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA =LATITUDE_DELTA*ASPECT_RATIO;
    const INITIAL_POSITION={
        latitude : 33.893791,
        longitude: 35.501778,
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
                    <Marker coordinate={{
                    latitude : 33.893791,
                    longitude: 35.501778
                }}/>
                <Marker coordinate={{
                    latitude : 33.793791,
                    longitude: 35.401778
                }}/>
                </MapView>
                
            </View>
        </View>
        );
}

export default Map;