import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles';
import Input from '../../components/Inputs/Inputs';
import Buttons from '../../components/Button/Button';
import { useState } from 'react';
import { store } from '../../Redux/store';
import { setToken, updateUser } from '../../Redux/Slices/userSlice';
import {  useMutation} from "@tanstack/react-query";
import { loginUser } from '../../query/auth/auth';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //function to login
    const {mutate, isLoading} = useMutation(loginUser, {
        onSuccess: (data) =>{
            store.dispatch(updateUser({
                user: data.data.user
            }))
            store.dispatch(setToken({
                token: data.data.token
            }))
        },
        onError: (e) => {
           setError('Invalid Credentials')
        }
     })
    const handleSubmit = ()=>{
        if(email==''){
            setError('Email is required')
        }
        else if(password==''){
            setError('Password is required')
        }
        else{
        const payload = {
            email,
            password
        }
        mutate(payload)
    }
    }
    return(
        <View style={styles.root}>
            <View>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../assets/images/logo.jpg')}></Image>
                </View>
                <Input 
                label={"Email"}
                placeholder={"Enter your email:"}
                type ={"email-address"}
                onChange={(e)=>setEmail(e)}
                onFocus={()=>setError('')}
                />
                <Input 
                label={"Password"}
                placeholder={"Enter your password:"}
                type={"password"}
                onChange={(e)=>setPassword(e)}
                onFocus={()=>setError('')}
                />
                {error && <Text style={styles.errorField}>{error}</Text>}
                <Buttons
                title={"LOGIN"}
                onClick={handleSubmit}/>

            </View>
        </View>
    );
}

export default Login;