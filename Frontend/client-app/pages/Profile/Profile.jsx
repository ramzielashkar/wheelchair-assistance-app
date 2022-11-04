import { Text, View,Dimensions, ScrollView, FlatList, Image } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () =>{
    let screenWidth = Dimensions.get('window').width
    let flatListStyle;
    const edit =()=>{
        console.log('edit')
    }

    return(
        <ScrollView style={styles.root}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/hospital.webp')}></Image>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.userName}>Ramzi El Ashkar</Text>
                <View style={styles.location}>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={15} color="#0A61E1" />
                        <Text style={styles.locationText}>Beirut, Lebanon</Text>
                    </View>
                    <View>
                        <Ionicons name="ios-pencil-sharp" size={20} color="#0A61E1" onPress={edit} />
                    </View>
                </View>
                <View style={styles.location}>
                    <View style={styles.locationContainer}>
                    <MaterialCommunityIcons name={"email-outline"} size={15} color={"#0A61E1"}/>
                        <Text style={styles.locationText}>ramziashkar@gmail.com</Text>
                    </View>
                    
                </View>
        </View>
        </ScrollView>
    );

 
  
}
export default Profile;