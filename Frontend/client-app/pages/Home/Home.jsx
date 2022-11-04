import { Text, View,Dimensions, ScrollView, FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect } from "react";
import ItemSeparator from "../../components/ItemSeparator/ItemSeparator";
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
const Home = () =>{
let screenWidth = Dimensions.get('window').width
 console.log(screenWidth);
 let columns=2;
 if(screenWidth > 600){
    columns=3;
 }
 
    return(
        <ScrollView style={styles.root}>
            <SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hospitals</Text>
                    <Text style={styles.more}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={{gap:20}}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>

            <SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Restaurants</Text>
                    <Text style={styles.more}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={{gap:20}}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
                        data={item}/>
                    )}
                    numColumns={columns}
                    >
                </FlatList>
            </SafeAreaView>
            <SafeAreaView style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Vendors</Text>
                    <Text style={styles.more}>View more</Text>
                </View>
                <FlatList 
                    columnWrapperStyle={{gap:20}}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
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