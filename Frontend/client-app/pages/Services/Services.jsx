import { Text, View,Dimensions, ScrollView, FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
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
const Services = ({navigation, route})=>{
    const type = route.params;
    console.log(type);
    //function to navigate to service page
    const navigateToService=(name)=>{
        navigation.navigate('Service', {name:name});
    }
    const count =1;
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
                    <Text style={styles.title}>{type.type}</Text>
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
export default Services;