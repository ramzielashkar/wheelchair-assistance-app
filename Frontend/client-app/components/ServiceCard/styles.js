import { StyleSheet } from 'react-native';
import { Roboto_400Regular} from '@expo-google-fonts/roboto';

const styles = StyleSheet.create({
        container:{
            paddingBottom:15,
            backgroundColor:"white",
            width:"45%",
            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,
            elevation: 13,
        },
        image:{
            height:100,
            borderRadius:20,
        },
        name:{
            fontFamily:Roboto_400Regular,
            fontWeight:"bold",
            fontSize:13,
            marginLeft:7,
            marginTop:10,
        },
        location:{
            flex:1,
            flexDirection:"row",
            alignItems:"center",
            marginLeft:7,
            fontFamily:Roboto_400Regular,
            fontWeight:"bold",
            fontSize:10,
            color:"rgba(0, 0, 0, 0.7)"
        },
        more:{
            paddingHorizontal:10,
            flex:1,
            flexDirection:"row",
            justifyContent:"flex-end",
        },
        more_info:{
            alignItems:"center",
            justifyContent:"center",
            borderRadius:50,
            backgroundColor:"#0A61E1",
            width:24,
            height:24,
        }

     });

export default styles;