import { Text, View,Dimensions, ScrollView, FlatList } from "react-native";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import styles from "./style";

const data = [
    {
        name:"Restaurant",
        location:"Beirut, Lebanon"
},
{
    name:"Restaurant",
    location:"Beirut, Lebanon"
},
{
    name:"Restaurant",
    location:"Beirut, Lebanon"
},
]
const Favorites =()=>{
    let screenWidth = Dimensions.get('window').width
 console.log(screenWidth);
 let columns=2;
 if(screenWidth > 600){
    columns=3;
 }
 
    return(
        <ScrollView style={styles.root}>
            <View style={styles.serviceContainer}>
            <FlatList 
                    columnWrapperStyle={{gap:20, marginBottom:20}}
                    data={data}
                    renderItem={({item})=>(
                        <ServiceCard
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