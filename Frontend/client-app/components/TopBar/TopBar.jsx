import { View ,Text, Image } from "react-native";
import styles from './styles';
import logo from '../../assets/images/logo.jpg';
import  Icon  from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const TopBar = ({props})=>{
    return(
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Image source={logo} style={styles.logoImage}></Image>
                <Text style={styles.title}>{props}</Text>
            </View>
            <View style={styles.navigationContainer}>
        <Icon name="notifications-outline" size={28} color={"#0A61E1"} />
            <MaterialCommunityIcons name={"message-text-outline"} size={28} color={"#0A61E1"} />            
            </View>
        </View>
    );
}
export default TopBar;