import { StyleSheet } from 'react-native';
import { Roboto_400Regular} from '@expo-google-fonts/roboto';

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#F9F9F9",
        flex:1,
        flexDirection:"column",
        paddingHorizontal:34,   
        },
        container:{
            marginTop:25,
            marginBottom:12,
        },
        title:{
            fontFamily:Roboto_400Regular,
            fontWeight:"bold",
            fontSize:20,
            marginBottom:25,
        },
        services:{
            flex:1,
            flexDirection:"row",
            justifyContent:"space-between",
        }

     });

export default styles;