import { View ,Text, Image } from "react-native";
import styles from './styles';
import logo from '../../assets/images/logo.jpg';
import { mdiBellRing, mdiMessageText } from '@mdi/js';
import Icon from '@mdi/react';
const TopBar = ()=>{
    return(
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Image source={logo} style={styles.logoImage}></Image>
                <Text style={styles.title}>Wheel of Life</Text>
            </View>
            <View style={styles.navigationContainer}>
                <Icon path={mdiBellRing} size={1} color={"#0A61E1"}/>
                <Icon path={mdiMessageText} size={1} color={"#0A61E1"}/>
            </View>
        </View>
    );
}
export default TopBar;