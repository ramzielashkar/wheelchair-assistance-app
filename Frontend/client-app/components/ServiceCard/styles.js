import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container:{
            flexDirection:"column",
            paddingBottom:15,
            backgroundColor:"white",
            width:"48%",
            height:"100%",
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
            width:"100%",
            height:90,
            borderRadius:20,
        },
        name:{
            fontFamily:"Roboto",
            fontWeight:"bold",
            fontSize:13,
            marginLeft:10,
            marginTop:10,
        },
        location:{
            paddingRight:10,
            flex:1,
            flexDirection:"row",
            alignItems:"center",
            marginLeft:7,
            fontFamily:"Roboto",
            fontWeight:"bold",
            fontSize:10,
            color:"rgba(0, 0, 0, 0.7)"
        },
        more:{
            flexDirection:"row",
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