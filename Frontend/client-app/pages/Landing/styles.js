import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#F9F9F9",
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",    
        },
    container:{
        alignSelf:"center",
    },
    image:{
        width:250,
        height:250,
        borderRadius:30
    },
    user_info:{
        marginTop:30,
    },
    labels:{
        fontFamily:"Roboto",
        fontSize:"16",
        fontWeight:"bold",
    }
});

export default styles;