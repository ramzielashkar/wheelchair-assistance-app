import { Text, View,Dimensions, ScrollView, FlatList, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import photo from '../../assets/images/hospital.webp';
import { ImageSlider } from "react-native-image-slider-banner";


const ServicePage = ({navigation, route})=>{
    const [image, setImage] = useState(photo);
    const [followed, setfollowed] = useState(false);

const data=[
{   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNCb0fpwqIyI2_kVF10edAAxN7vuL1XBmNw&usqp=CAU",
},   
{   img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatZSutgIKiDScKJrQTADvMiHukoi-9QeFYA&usqp=CAU",
},
{   img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJyBH7aR8qVizMo5qDuRnGJu8dn_uEmF3EA&usqp=CAU"
}    
]

    return(
        <ScrollView style={styles.root}>
            <View style={styles.imageContainer}>
            <ImageSlider 
                data={data}
                autoPlay={false}
                closeIconColor="#fff"
                caroselImageStyle={styles.image}
            />            
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profileHeader}>
                    <View style={styles.serviceName}>
                        <Text style={styles.userName}>{route.params.name}</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity style={styles.iconContainer} onPress={()=>{setfollowed(!followed)}}>
                            <MaterialCommunityIcons name={
                                !followed? "cards-heart-outline" : "cards-heart"} size={25} color={"white"}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                            <MaterialCommunityIcons name={"message-text"} size={25} color={"white"}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.location}>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={15} color="#0A61E1" />
                        <Text style={styles.locationText}>Beirut, Lebanon</Text>
                    </View>
                </View>
                <View style={styles.location}>
                    <View style={styles.locationContainer}>
                        <MaterialCommunityIcons name={"phone"} size={15} color={"#0A61E1"}/>
                        <Text style={styles.locationText}>71487328</Text>
                    </View>
                </View>
                <View style={styles.location}>
                    <View style={styles.description}>
                        <Text>We provide services for eveyone, we  are accessible for everyone</Text>
                    </View>
                </View>
                <Text style={styles.hours}>Working Hours</Text>
                <Text style={styles.workingHours}>Monday to Friday 10am to 11pm</Text>

            </View>
        </ScrollView>
    );
}
export default ServicePage;