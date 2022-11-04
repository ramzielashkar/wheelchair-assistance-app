import { StyleSheet } from 'react-native';
//import { Roboto_400Regular} from '@expo-google-fonts/roboto';

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#F9F9F9",
        flex:1,
        flexDirection:"column",
        },
    imageContainer:{
        position:'relative',
        flex:1,
        width:'100%',
        borderRadius:30,
    },
    image:{
        width:"100%",
        height:400,
        borderRadius:30,

    },
    profileContainer:{
        paddingHorizontal:38,
        marginTop:30,
    },
    userName:{
        fontFamily:"Roboto",
        fontSize:20,
        fontWeight:"bold",
    },
    location:{
        alignItems:"center",
        width:'100%',
        flexDirection:"row",
        marginTop:15,
    },
    locationContainer:{
        flex:1,
        width:'100%',
        alignItems:"center",
        flexDirection:"row",
    },
    locationText:{
        marginLeft:10,
    }

     });

export default styles;