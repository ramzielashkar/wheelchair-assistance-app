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

const data = [
    {
        name:"Restaurant",
        location:"Beirut, Lebanon"
},
{
    name:"Restaurant",
    location:"Beirut, Lebanon"
},

]

const Home = ({navigation}) =>{
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
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
    const navigateToService=(name)=>{
        navigation.navigate('Service', {name:name});
    }
    const navigateToServices = (type)=>{
        navigation.navigate('Services', {type:type});

    }
    const count =1;
let screenWidth = Dimensions.get('window').width;
let flatListStyle;
 console.log(screenWidth);
 if(screenWidth<450){
    flatListStyle={justifyContent: "space-between"}
 }else if(screenWidth>450){
    flatListStyle={gap:20}
 }
 let columns=2;
 if(screenWidth > 450){
    columns=3;
 }
    if(count==0){
        return(
            <EmptyState
                content={'hospitals'}
                icon={'map-marker'}
            />
        );
    }
    return(
        <ScrollView style={styles.root}>
            <SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hospitals</Text>
                    <Text style={styles.more} onPress={() => navigateToServices('Hospitals')}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
                            press={()=>{navigateToService(item.name)}}
                            data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>

            <SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Restaurants</Text>
                    <Text style={styles.more} onPress={() => navigateToServices('Restaurants')}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item.name)}}
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>
            <SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Vendors</Text>
                    <Text style={styles.more} onPress={() => navigateToServices('Vendors')}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={flatListStyle}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item.name)}}
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>
        </ScrollView>
    );
}
export default Home;