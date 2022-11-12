import { Text, View,Dimensions, ScrollView, FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { queryClient } from "../../App";
import { ALL_HOSPITALS, ALL_RESTAURANTS, ALL_VENDORS } from "../../query/ServiceProviders/useServiceProviders";
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
    let services;
    if(type.type=="Hospitals"){
         services = queryClient.getQueryData(ALL_HOSPITALS)

    }else if(type.type=="Restaurants"){
         services = queryClient.getQueryData(ALL_RESTAURANTS)
    }
    else if(type.type=="Vendors"){
         services = queryClient.getQueryData(ALL_VENDORS)
    }
    //function to navigate to service page
    const navigateToService=(item)=>{
        navigation.navigate('Service', {service:item, name:item.name});
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
        if(services.user.length==0){
            return(
                <EmptyState
                    content={type.type}
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
                    data={services?.user}
                    renderItem={({item})=>(
                        <ServiceCard
                        press={()=>{navigateToService(item)}}
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