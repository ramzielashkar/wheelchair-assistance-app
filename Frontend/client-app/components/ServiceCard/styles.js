import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container:{
            flexDirection:"column",
            paddingBottom:15,
            backgroundColor:"white",
            width:150,
            height:"100%",
            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 20,
            elevation: 8,
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

        },
        location:{
            paddingRight:7,
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
            justifyContent:"flex-end"
        },
        more_info:{
            alignItems:"center",
            justifyContent:"center",
            borderRadius:50,
            backgroundColor:"#0A61E1",
            width:24,
            height:24,
        },
        unfollow:{
            marginTop:10,
            paddingRight:10,
            flex:1,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginBottom:5,
        }

     });

export default styles;