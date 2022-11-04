import { Image, Text, View } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 


const ServiceCard = ({data}) => {
 
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../../assets/images/hospital.webp')}></Image>
            </View>
            <View style={styles.unfollow}>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
            <View style={styles.location}>
                <Ionicons name="location-outline" size={15} color="black" />
                <Text style={styles.location}>{data.location}</Text>
                <View style={styles.more}>
                <View style={styles.more_info}>
                    <AntDesign name="caretright" size={11} color="white" />
                </View>
            </View>
            </View>

          
        </View>
    );
    
}

export default ServiceCard;