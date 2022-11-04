import { StyleSheet } from 'react-native';
//import { Roboto_400Regular} from '@expo-google-fonts/roboto';

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#F9F9F9",
        flex:1,
        flexDirection:"column",
        paddingHorizontal:34,   
        },
        serviceContainer:{
            marginTop:25,
            marginBottom:12,
        },
        header:{
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:25,
        },
        title:{
            fontFamily:"Roboto",
            fontWeight:"bold",
            fontSize:20,
        },
        services:{
        },
        more:{
            fontFamily:"Roboto",
            fontWeight:"bold",
            fontSize:10,
            color:"#0A61E1"
        }

     });

export default styles;