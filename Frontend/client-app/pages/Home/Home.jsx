import { Text, View,Dimensions, ScrollView } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () =>{
    const data=[{
        name:"hospital",
        location: "Beirut",
    },
    {
        name:"hospital",
        location: "Beirut",
    },
    {
        name:"hospital",
        location: "Beirut",
    },
    {
        name:"hospital",
        location: "Beirut",
    },
]
 const SLIDER_WIDTH = Dimensions.get('window').width + 80
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
    return(
        <ScrollView style={styles.root}>
            <View style={styles.serviceContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hospitals</Text>
                    <Text style={styles.more}>View more</Text>
                </View>
                <View style={styles.services}>
                <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut, Lebanon'}/>
                    <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut'}/>
                </View>
            </View>

            <View style={styles.serviceContainer}>
                <View style={styles.header}>
                        <Text style={styles.title}>Restaurants</Text>
                        <Text style={styles.more}>View more</Text>
                    </View>                
                    <View style={styles.services}>
                    <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut, Lebanon'}/>
                    <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut'}/>
                </View>
            </View>
            <View style={styles.serviceContainer}>
                <View style={styles.header}>
                        <Text style={styles.title}>Vendors</Text>
                        <Text style={styles.more}>View more</Text>
                    </View>
                <View style={styles.services}>
                    <ServiceCard 
                    name={'Vendor'}
                    location={'Beirut'}/>
                    <ServiceCard 
                    name={'Vendor'}
                    location={'Beirut'}/>
                </View>
            </View>
        </ScrollView>
    );
}
export default Home;