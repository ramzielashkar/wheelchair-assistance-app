import { Text, View,Dimensions, ScrollView, FlatList, Image, TextInput } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

const Profile = () =>{
    let screenWidth = Dimensions.get('window').width
    let flatListStyle;
    const [editable, setEditable]= useState(false);
    const edit =()=>{
        setEditable(true)
    }
    const save =()=>{
        console.log('save')
    }
    return(
        <ScrollView style={styles.root}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/hospital.webp')}></Image>
            </View>
            <View style={styles.profileContainer}>
                <TextInput 
                style={
                    !editable? styles.userName : styles.editable } 
                    keyboardType="default" editable={editable} defaultValue="Ramzi El Ashkar"></TextInput>
                <View style={styles.location}>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={15} color="#0A61E1" />
                        <Text style={styles.locationText}>Beirut, Lebanon</Text>
                    </View>
                    <View>
                        <Ionicons name={
                            !editable? "ios-pencil-sharp": "checkmark-sharp"
                        } size={20} color="#0A61E1" onPress={
                            !editable? edit : save } />
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