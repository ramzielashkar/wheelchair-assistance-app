import { Image, Text, View } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 


const ServiceCard = ({name, location}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../../assets/images/hospital.webp')}></Image>
            </View>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.location}>
            <Ionicons name="location-outline" size={15} color="black" />
                <Text style={styles.location}>{location}</Text>
            </View>

            <View style={styles.more}>
                <View style={styles.more_info}>
                    <AntDesign name="caretright" size={15} color="white" />
                </View>
            </View>
        </View>
    );
}

export default ServiceCard;