import { StyleSheet } from 'react-native';
//import { Roboto_400Regular} from '@expo-google-fonts/roboto';
const styles = StyleSheet.create({
    user_info:{
        marginTop:30,
    },
    labels:{
        fontFamily:"Roboto",
        fontSize:16,
        fontWeight:"bold",
    },
    input:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        backgroundColor:"white",
        borderWidth:1,
        paddingLeft:15,
        paddingVertical:10,
        marginTop:10,
        fontSize:12,
        fontFamily:"Roboto",
        borderStyle:"solid",
        borderColor:"black",
        borderRadius:30,
    }
});

export default styles;