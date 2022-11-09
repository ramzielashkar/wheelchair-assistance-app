//import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    headerContainer:{
        alignSelf:"center",
        width: width,
        flexDirection:"row",
        alignItems:'center',
        paddingHorizontal:16,
        justifyContent:"space-between"
    },
    titleContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    },
    logoImage:{
        width:40,
        height:40,
        borderRadius:50,
        marginRight:20
    },
    title:{
        fontFamily:"Roboto",
        fontWeight:"bold",
        fontSize:25
    },
    navigationContainer:{
        width:80,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    stackHeaderContainer:{
        alignSelf:"center",
        width: width,
        flexDirection:"row",
        alignItems:'center',
        paddingHorizontal:16,
        marginLeft:50,
    }
})
export default styles;