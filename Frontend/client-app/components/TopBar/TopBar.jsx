import { View ,Text, Image } from "react-native";
import styles from './styles';
import logo from '../../assets/images/logo.jpg';
import  Icon  from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const TopBar = ({props, path, navigation})=>{
    if(path==='stack'){
        return(
            <View style={styles.stackHeaderContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props}</Text>
                </View>
            </View>
        );
    }
    return(
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Image source={logo} style={styles.logoImage}></Image>
                <Text style={styles.title}>{props}</Text>
            </View>
            <View style={styles.navigationContainer}>
            <Icon name="notifications-outline" size={28} color={"#0A61E1"} onPress={()=>{navigation.navigate('Notifications')}}/>
            <MaterialCommunityIcons name={"message-text-outline"} size={28} color={"#0A61E1"} onPress={()=>{navigation.navigate('Chats')}} />            
            </View>
        </View>
    );
}
export default TopBar;