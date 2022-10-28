import { Text, View } from "react-native";
import styles from "./styles";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
const Home = () =>{
    return(
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Hospitals</Text>
                <View style={styles.services}>
                    <ServiceCard 
                    name={'hospital'}
                    location={'Beirut'}/>
                    <ServiceCard 
                    name={'hospital'}
                    location={'Beirut'}/>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Restaurants</Text>
                <View style={styles.services}>
                    <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut'}/>
                    <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut'}/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Vendors</Text>
                <View style={styles.services}>
                    <ServiceCard 
                    name={'Vendor'}
                    location={'Beirut'}/>
                    <ServiceCard 
                    name={'Vendor'}
                    location={'Beirut'}/>
                </View>
            </View>
        </View>
    );
}
export default Home;