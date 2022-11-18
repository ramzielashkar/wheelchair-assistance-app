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
    text:{
        textDecorationLine: 'underline',
        paddingBottom:1,
        marginTop:10,
        textAlign:"center"
    },
    errorField:{
        maxWidth:300,
        color:"red",
        marginTop:10,
        textAlign:"center"
    }
});

export default styles;