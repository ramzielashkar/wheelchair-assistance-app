import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    headerContainer:{
        alignSelf:"center",
        width: width,
        flexDirection:"row",
        alignItems:'center',
        paddingVertical:'0.3rem',
        paddingHorizontal:"1rem",
        justifyContent:"space-between"
    },
    titleContainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:20,
    },
    logoImage:{
        width:"40px",
        height:"40px",
        borderRadius:"50px",
    },
    title:{
        fontFamily:Roboto_700Bold,
        fontWeight:"bold",
        fontSize:"20px"
    },
    navigationContainer:{
        flexDirection:"row",
        gap:20,
    }
})
export default styles;