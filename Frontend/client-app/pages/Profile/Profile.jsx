import { Text, View,Dimensions, ScrollView, FlatList, Image, TextInput } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import photo from '../../assets/images/hospital.webp';
import * as ImagePicker from 'expo-image-picker';

const Profile = () =>{
    const [editable, setEditable]= useState(false);
    const [imageEdit, setImageEdit]= useState(false);
    const [image, setImage] = useState(null);
    const [base64, setBase64] = useState(null);
    const edit =()=>{
        setEditable(true)
    }
    const save =()=>{
        setEditable(false)
        console.log('save')
    }
    // function to choose photo
    const handleChoosePhoto= async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
          });
          
          if (!result.cancelled) {
            setBase64(result.base64)
            console.log(result.base64)
            setImageEdit(true);
            setImage(result.uri);
          }
    }
    //function to submit photo
    const submitPhoto =()=>{
        setImageEdit(false);
        console.log('submit');
    }
    return(
        <ScrollView style={styles.root}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:image}}></Image>
                <View style={styles.editPicture}>
                    <MaterialCommunityIcons name={
                        !imageEdit?"image-edit":"check" }
                         size={40} color={"white"} onPress={
                            !imageEdit? handleChoosePhoto : submitPhoto}/>
                </View>
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
                        } size={28} color="#0A61E1" onPress={
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