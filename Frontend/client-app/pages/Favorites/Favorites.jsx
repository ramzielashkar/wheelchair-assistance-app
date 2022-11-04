import { Text, View,Dimensions, ScrollView, FlatList } from "react-native";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import styles from "./style";

const data = [
    {
        name:"Restaurant",
        location:"Beirut, Lebanon"
},
{
    name:"Vendor",
    location:"Beirut, Lebanon"
},
{
    name:"Restaurant",
    location:"Beirut, Lebanon"
},
]
const Favorites =({navigation})=>{
    let screenWidth = Dimensions.get('window').width
    let flatListStyle;
 console.log(screenWidth);
 if(screenWidth<450){
    flatListStyle={
        justifyContent: "space-between",
        marginBottom:20
}}else if(screenWidth>450){
    flatListStyle={gap:20,
        marginBottom:20
    }
 }
 
 console.log(screenWidth);
 let columns=2;
 if(screenWidth > 600){
    columns=3;
 }
 const navigateToService=(name)=>{
    navigation.navigate('Service', {name:name});
}
 
    return(
        <ScrollView style={styles.root}>
            <View style={styles.serviceContainer}>
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
            </View>
        </ScrollView>
    );
}

export default Favorites;