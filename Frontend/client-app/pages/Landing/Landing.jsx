import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';
import logo from '../../assets/images/logo.jpg';
import Input from '../../components/Inputs/Inputs';
import Buttons from '../../components/Button/Button';
const Landing = ({navigation}) =>{
    return(
        <View style={styles.root}>
            <View>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../assets/images/logo.jpg')}></Image>
                </View>
                <Input 
                label={"Name"}
                placeholder={"Enter your name:"}
                type={"default"}/>
                <Input 
                label={"Email"}
                placeholder={"Enter your email:"}
                type ={"email-address"}/>
                <Input 
                label={"Password"}
                placeholder={"Enter your password:"}
                type={"password"}/>
                <Buttons
                title={"REGISTER"}/>

                <Text style={styles.text} onPress={()=>navigation.push("Login")}>Already have an account? SignIn</Text>
            </View>
        </View>
    );
}
export default Landing;