import { Text, View,Dimensions, ScrollView, FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import ItemSeparator from "../../components/ItemSeparator/ItemSeparator";
import EmptyState from "../../components/EmptyState/EmptyState";
import * as Location from 'expo-location';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../../Redux/store";
import { updateLocation } from "../../Redux/Slices/userSlice";
import { useSelector } from "react-redux";
import { useHospitals, useRestaurants, useVendors } from "../../query/ServiceProviders/useServiceProviders";
import { getLatitude } from "../../query/getLatitude";
import { getLongitude } from "../../query/getLongitude";

const Home = ({navigation}) =>{
    const [location, setLocation] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [userLocation, setUserLocation]= useState({});
    
    
    useEffect(()=>{
        (async ()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setUserLocation({
        latitude:location.coords.latitude,
        longitude: location.coords.longitude
      })
        store.dispatch(updateLocation({
            location: {
                latitude:location.coords.latitude,
                longitude: location.coords.longitude
              }
        }))

    })();
    

  }, []);
 
 
    //function to navigate to service page
    const navigateToService=(item)=>{
        navigation.navigate('Service', {service:item, name:item.name});
    }
    const navigateToServices = (type)=>{
        navigation.navigate('Services', {type:type});

    }
    //getting user geo location form redux store
    const latitude = useSelector((state)=>state.user.geo_location.latitude? state.user.geo_location.latitude : ' ')
    const longitude = useSelector((state)=>state.user.geo_location.longitude? state.user.geo_location.longitude: " " )

let screenWidth = Dimensions.get('window').width;
let flatListStyle;
let columns=2;


// getting service providers
 const { data: hospitals, isLoading: isLoadingHospitals,  isFetching: isFetchingHospitals  } = useHospitals(latitude, longitude);
 const { data: restaurants, isLoading: isLoadingRestaurants,  isFetching: isFetchingRestaurants  } = useRestaurants(latitude, longitude );
 const { data: vendors, isLoading: isLoadingVendors,  isFetching: isFetchingVendors  } = useVendors(latitude, longitude);
 
 // if no service providers
    if(hospitals && vendors && restaurants && hospitals.user.length==0 && vendors.user.length==0 && restaurants.user.length==0){
        return(
            <EmptyState
                content={'Services'}
                icon={'map-marker'}
            />
        );
    }
    // managing different screen sizes
    if(screenWidth<450){
        flatListStyle={justifyContent: "space-between"}
        if(hospitals?.user.length > 2){
            hospitals.user = hospitals.user.slice(0, 2)
        }
        if(restaurants?.user.length > 2){
            restaurants.user = restaurants.user.slice(0, 2)
        }
        if(vendors?.user.length > 2){
            vendors.user = vendors.user.slice(0, 2)
        }
     }else if(screenWidth>450){
        flatListStyle={gap:20}
        columns=3;
     }
   
    return(
        <ScrollView style={styles.root}>
           {hospitals?.user.length!=0 &&<SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hospitals</Text>
                    <Text style={styles.more} onPress={() => navigateToServices('Hospitals')}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={hospitals?.user}
                    renderItem={({item})=>(
                        <ServiceCard
                            press={()=>{navigateToService(item)}}
                            data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>}

           { restaurants?.user.length!=0 &&<SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Restaurants</Text>
                    <Text style={styles.more} onPress={() => navigateToServices('Restaurants')}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={restaurants?.user}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item.name)}}
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>}
            { vendors?.user.length!=0  && <SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Vendors</Text>
                    <Text style={styles.more} onPress={() => navigateToServices('Vendors')}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={vendors?.user}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item.name)}}
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>}
        </ScrollView>
    );
}
export default Home;