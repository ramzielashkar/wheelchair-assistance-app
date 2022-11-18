import { Text, View,Dimensions, ScrollView, FlatList, Image, TextInput, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import photo from '../../assets/images/hospital.webp';
import { ImageSlider } from "react-native-image-slider-banner";
import Buttons from "../../components/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { baseUrl } from "../../Credentials/credentials";


const ServicePage = ({navigation, route})=>{
    const [image, setImage] = useState(photo);
    const [followed, setfollowed] = useState(false);
    const [mutateFn, setMutateFn] = followed?['UNFOLLOW'] : ['FOLLOW']
    const loggedInUser = useSelector((state)=>state.user.following)
    //checking if the service is followed or not
    useEffect(()=>{
        if(loggedInUser.some(e=>e.following_id?._id===route.params.service._id)){
            setfollowed(true)
        }else{
            console.log('unfollowed')
        }
    }, [])

    //default image
    const data = [{
        img:`${baseUrl}/public/${route.params.service.profile_picture}`
    },]
    const pictures = []
    //getting service pictures
    route.params.service?.pictures?.map((picture)=>{
        pictures.push({"img": `${baseUrl}/public/${picture.picture}`})
    })

   

    //function to navigate to map
    const navigateToMap=()=>{
        navigation.navigate('Map', {service:route.params.service ,name:route.params.name})
    }
     //function to mutate follow/unfollow service provider
     let {mutate} = useMutation([mutateFn]);

    //function to follow service provider
    const follow =(id)=>{
       setfollowed(!followed)
       mutate(id)
        
    }
    //function to unfollow service provider
    const unFollow =(id)=>{
      setfollowed(!followed)
      mutate(id)   
    }

    return(
        <ScrollView style={styles.root}>
            <View style={styles.imageContainer}>
            <ImageSlider 
                data={pictures.length>0? pictures :
                    data}
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
                        <TouchableOpacity style={styles.iconContainer} 
                        onPress={
                            ()=>{!followed ?follow(route.params.service._id): unFollow(route.params.service._id)}
                        }>
                            <MaterialCommunityIcons name={
                                !followed? "cards-heart-outline" : "cards-heart"} size={25} color={"white"}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer} onPress={()=>{navigation.navigate('Chat', {service:route.params.service ,name:route.params.name})}}>
                            <MaterialCommunityIcons name={"message-text"} size={25} color={"white"}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.location}>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-outline" size={15} color="#0A61E1" />
                        <Text style={styles.locationText}>{route.params.service.location}</Text>
                    </View>
                </View>
                {route.params.service.phone_number &&<View style={styles.location}>
                    <View style={styles.locationContainer}>
                        <MaterialCommunityIcons name={"phone"} size={15} color={"#0A61E1"}/>
                        <Text style={styles.locationText}>71487328</Text>
                            </View>
                            </View>}
                <View style={styles.location}>
                    <View style={styles.description}>
                        <Text>{route.params.service.description}</Text>
                    </View>
                </View>
                <Text style={styles.hours}>Working Hours</Text>
                <Text style={styles.workingHours}>{route.params.service.working_hours}</Text>
                <Buttons 
                title={"SHOW ON MAP"}
                onClick={navigateToMap}
                />
            </View>
        </ScrollView>
    );
}
export default ServicePage;