import { Text, View,Dimensions, ScrollView, FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect } from "react";
import ItemSeparator from "../../components/ItemSeparator/ItemSeparator";
import EmptyState from "../../components/EmptyState/EmptyState";
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