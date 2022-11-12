import { Text, View,Dimensions, ScrollView, FlatList, Image, TextInput } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import Buttons from "../../components/Button/Button";
import { store } from "../../Redux/store";
import { deleteUser, updateName } from "../../Redux/Slices/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from 'react-redux';
import { baseUrl } from "../../Credentials/credentials";
import {  useMutation } from "@tanstack/react-query";
import { getToken } from "../../query/getToken";
import { getLatitude } from "../../query/getLatitude";
import { getLongitude } from "../../query/getLongitude";
const Profile = () =>{
    const loggedInUser = useSelector((state)=>state.user)
    const [editable, setEditable]= useState(false);
    const [imageEdit, setImageEdit]= useState(false);
    const [image, setImage] = useState(`${baseUrl}/public/${loggedInUser.profile_picture}`);
    const [base64, setBase64] = useState('');
    const [mutateFn, setMutateFn] = editable?['UPDATE_PROFILE'] : ['UPDATE_PICTURE  ']
    const [name, setName] = useState(loggedInUser?.name);
    //function to logout
    const logout = async()=>{
        store.dispatch(deleteUser())
    }
     const { mutate } = useMutation([mutateFn])

    //function to edit profile picture
    const editPicture = ()=>{
        console.log('save')

    }
console.log(getLatitude())
    const edit =()=>{
        setEditable(true)
    }
    const save =()=>{
        console.log(mutateFn)
        store.dispatch(updateName({
            name: name
        }))
        mutate({name})
        setEditable(false)
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
    const submitPhoto =  ()=>{
        setImageEdit(false);
        console.log('submit')
        //setMutationKey("UPDATE_PICTURE")
        
       mutate({image:base64})
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
                    keyboardType="default" editable={editable} defaultValue={loggedInUser.name} onChangeText={(e)=>setName(e)}></TextInput>
                <View style={styles.location}>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={15} color="#0A61E1" />
                        <Text style={styles.locationText}>{loggedInUser.location.address.city} {loggedInUser.location.address.subregion} {loggedInUser.location.address.country}</Text>
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
                        <Text style={styles.locationText}>{loggedInUser.email}</Text>
                    </View>
                    
                </View>
            </View>
            <Buttons
            title={"LOGOUT"}
            onClick={()=>logout()}/>
        </ScrollView>
    );

 
  
}
export default Profile;