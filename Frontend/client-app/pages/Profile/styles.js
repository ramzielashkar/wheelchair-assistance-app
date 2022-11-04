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
        marginTop:40,
    },
    userName:{
        color:"black",
        borderRadius:30,
        padding:10,
        width:300,
        fontFamily:"Roboto",
        fontSize:20,
        fontWeight:"bold",
    },
    editable:{
        borderRadius:30,
        paddingVertical:10,
        paddingHorizontal:20,
        width:300,
        fontFamily:"Roboto",
        fontSize:20,
        fontWeight:"bold",
        borderColor:"black",
        borderWidth:1,
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
    },
    editPicture:{
        position:"absolute",
        borderRadius:50,
        backgroundColor:"#0A61E1",
        padding:15,
        bottom:-30,
        right:20,
    }

     });

export default styles;