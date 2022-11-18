import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    notificationCard:{
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:"white",
        borderBottomColor:"gray",
        borderBottomWidth:1,
        flex:1,
        flexDirection:"column",
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,
            elevation: 13,
    },
    title:{
        fontFamily:"Roboto",
        fontSize:16,
        fontWeight:"bold",
        marginBottom:5,
    },
    content:{
        fontFamily:"Roboto",
        fontSize:14,
    },
    dateContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        
    },
    date:{
        fontSize:10,
        color:"#0A61E1"
    }
})
export default styles;