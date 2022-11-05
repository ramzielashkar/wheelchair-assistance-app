import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root:{
        backgroundColor:"#F9F9F9",
        flex:1,
        flexDirection:"column",
        },
    mapContainer:{
        position:"relative",
        borderRadius:30,
        height:"100%",
        width:"100%"
    },
    map:{
        width:'100%',
        height:"100%",
        borderRadius:30,
    },
    btn:{
        position:"absolute",
        left:30,
        bottom:20,
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
    }
})

export default styles;