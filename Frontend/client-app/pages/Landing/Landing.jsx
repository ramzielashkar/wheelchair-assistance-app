import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';
import logo from '../../assets/images/logo.jpg';
import Input from '../../components/Inputs/Inputs';
import Buttons from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { registerUser } from '../../query/auth/auth';
import { store } from '../../Redux/store';
import { setToken, updateUser } from '../../Redux/Slices/userSlice';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { getDeviceToken } from '../../services/useNotifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Landing = ({navigation}) =>{
    AsyncStorage.getItem('deviceToken').then((res)=>setDeviceToken(res))
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [deviceToken, setDeviceToken] = useState('')
     //function to register
     const {mutate, isLoading} = useMutation(registerUser, {
        onSuccess: (data) =>{
            
            store.dispatch(updateUser({
                user: data.data.user
            }))
            store.dispatch(setToken({
                token: data.data.token
            }))
        },
        onError: (e) => {
           setError('Email already exists')
        }
     })
    //function to submit form
    const handleSubmit = ()=>{
        
        if(name==''){
            setError('Name is required')
        }
        else if(email==''){
            setError('Email is required')
        }
        else if(password==''){
            setError('Password is required')
        }
        else{
        if(!emailValidator(email)){
            setError('Input valid email')
        }
        else if(!passwordValidator(password)){
            setError('Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
        }
        else{
            const payload = {
                name,
                email,
                password,
                deviceToken
            }
            mutate(payload)
        }
    }
    }
    return(
        <View style={styles.root}>
            <View>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../assets/images/logo.jpg')}></Image>
                </View>
                <Input 
                label={"Name"}
                placeholder={"Enter your name:"}
                type={"default"}
                onChange={(e)=>setName(e)}
                onFocus={()=>setError('')}/>
                <Input 
                label={"Email"}
                placeholder={"Enter your email:"}
                type ={"email-address"}
                onChange={(e)=>setEmail(e)}
                onFocus={()=>setError('')}/>
                <Input 
                label={"Password"}
                placeholder={"Enter your password:"}
                type={"password"}
                onChange={(e)=>setPassword(e)}
                onFocus={()=>setError('')}/>
                {error && <Text style={styles.errorField}>{error}</Text>}
                <Buttons
                title={"REGISTER"}
                onClick={handleSubmit}/>
                <Text style={styles.text} onPress={()=>navigation.push("Login")}>Already have an account? SignIn</Text>
            </View>
        </View>
    );
}
export default Landing;