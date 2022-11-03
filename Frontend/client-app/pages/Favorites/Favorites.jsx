import { Text, View,Dimensions, ScrollView } from "react-native";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import styles from "./style";

const Favorites =()=>{
    return(
        <ScrollView style={styles.root}>
            <View style={styles.serviceContainer}>
                <View style={styles.services}>
                <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut, Lebanon'}/>
                    <ServiceCard 
                    name={'Restaurant'}
                    location={'Beirut'}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default Favorites;