import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';
import logo from '../../assets/images/logo.jpg';
const Landing = () =>{
    return(
        <View style={styles.root}>
            <View>
                <Image source={logo}></Image>
            </View>
        </View>
    );
}
export default Landing;