import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';
import Input from '../../components/Inputs/Inputs';
import Buttons from '../../components/Button/Button';
const Login = () =>{
    return(
        <View style={styles.root}>
            <View>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../assets/images/logo.jpg')}></Image>
                </View>
                <Input 
                label={"Email"}
                placeholder={"Enter your email:"}
                type ={"email-address"}/>
                <Input 
                label={"Password"}
                placeholder={"Enter your password:"}
                type={"password"}/>
                <Buttons
                title={"LOGIN"}/>

            </View>
        </View>
    );
}

export default Login;