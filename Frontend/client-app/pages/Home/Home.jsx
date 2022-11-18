import { Text, View,Dimensions, ScrollView, FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import EmptyState from "../../components/EmptyState/EmptyState";
import * as Location from 'expo-location';
import { store } from "../../Redux/store";
import { updateAddress, updateLocation } from "../../Redux/Slices/userSlice";
import { useSelector } from "react-redux";
import { useHospitals, useRestaurants, useVendors } from "../../query/ServiceProviders/useServiceProviders";
import { useFavorites } from "../../query/Favorites/useFavorites";

const Home = ({navigation}) =>{
    const loggedInUser = useSelector((state)=>state.user)
    const [location, setLocation] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [userLocation, setUserLocation]= useState({});
    const [fetched, setFetched] = useState(false)
   const latitude =loggedInUser.geo_location?.latitude?loggedInUser.geo_location?.latitude : 1;
   const longitude =loggedInUser.geo_location?.longitude?loggedInUser.geo_location?.longitude : 1
    useEffect(()=>{
        (async ()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(location.coords)
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
        store.dispatch(updateAddress({
            location:{
                address:address[0]
            }
        }))
        setLocation(true);
       

    })();
    

  }, []);

     //function to navigate to service page
     const navigateToService=(item)=>{
        navigation.navigate('Service', {service:item, name:item.name});
    }
    const navigateToServices = (type)=>{
        navigation.navigate('Services', {type:type});

    }
  const { data: favorites, isLoading: isLoadingFavorites,  isFetching: isFetchingFavorites} = useFavorites(); 
  const { data: hospitals, isLoading: isLoadingHospitals,  isFetching: isFetchingHospitals, refetch: refetchHospitals  } = useHospitals(latitude, longitude);
  const { data: restaurants, isLoading: isLoadingRestaurants,  isFetching: isFetchingRestaurants,refetch: refetchRestaurants} = useRestaurants(latitude, longitude );
  const { data: vendors, isLoading: isLoadingVendors,  isFetching: isFetchingVendors, refetch: refetchVendors } = useVendors(latitude, longitude); 
 
  if(location){
    setLocation(false)
    refetchHospitals(),
    refetchRestaurants(),
    refetchVendors()
  }
    //getting user geo location form redux store
let screenWidth = Dimensions.get('window').width;
let flatListStyle;
let columns=2;        
    let hospitalsData = hospitals?.user;
    let restaurantsData = restaurants?.user;
    let vendorsData = vendors?.user;
    
    // managing different screen sizes
    if(screenWidth<450){
        flatListStyle={justifyContent: "space-between"}
        if(hospitals?.user.length > 2){
            hospitalsData = hospitalsData.slice(0, 2)
        }
        if(restaurants?.user.length > 2){
            restaurantsData = restaurantsData.slice(0, 2)
        }
        if(vendors?.user.length > 2){
            vendorsData = vendorsData.slice(0, 2)
        }
     }else if(screenWidth>450){
        flatListStyle={gap:20}
        columns=3;
}
    // if no service providers
    if(hospitals && vendors && restaurants && hospitals.user.length==0 && vendors.user.length==0 && restaurants.user.length==0){
    return(
        <EmptyState
            content={'Services'}
            icon={'map-marker'}
        />
    );
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
                    data={hospitalsData}
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
                    data={restaurantsData}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item)}}
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
                    data={vendorsData}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item)}}
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