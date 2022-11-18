import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    chatCard:{
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:"white",
        borderBottomColor:"gray",
        borderBottomWidth:1,
        flex:1,
        flexDirection:"row",
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,
            elevation: 13,
    },
    contentContainer:{
        flex:1,
        flexDirection:"column",
    },
    title:{
        fontFamily:"Roboto",
        fontSize:16,
        fontWeight:"bold",
        marginBottom:5,
    },
    content:{
        paddingRight:10,
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
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
    },
    imageContainer:{
        alignItems:"center",
        justifyContent:"center",
        marginRight:20,
    }
})
export default styles;