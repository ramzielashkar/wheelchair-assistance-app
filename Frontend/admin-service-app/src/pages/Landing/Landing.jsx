import './style.css';
import logo from '../../assets/images/logo.jpg';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../query/auth/auth';
import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { queryClient } from '../../App';
import { store, persistor } from '../../Redux/store';
import { updateUser } from '../../Redux/slices/userSlice';
const Landing =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState(false);
    const navigate = useNavigate();

    const navigateToRoute = async ()=>{
            const currentUser = await queryClient.getQueryData(["CurrentUser"]);
            localStorage.setItem('token', currentUser.data.token);
            console.log(currentUser.data.user)
            store.dispatch(updateUser({
                user: currentUser.data.user
            }))
            if(currentUser.data.user.usertype === 'Seller'){
                navigate('/service/followers');
            }
            else {
                navigate('/admin/services');
            }
    }
    const {mutate, isLoading} = useMutation(loginUser, {
        onSuccess: (data) =>{
            queryClient.setQueryData(["CurrentUser"], {...data})
            navigateToRoute()
        },
        onError: (e) => {
            setError(true)
        },
       onSettled: () => {
         queryClient.invalidateQueries('create');
       }
     })

    //function to submit login form
    const submit = async (e)=>{
        console.log('submit')
        e.preventDefault();
        const payload = {
            email, 
            password
        }
         mutate(payload);

    }

    // handeling errors
    let errorfield;
    if(error){
         errorfield = <p className='error '>Invalid Credentials</p>
    }else{
         errorfield = <p className='error hidden'>Invalid Credentials</p>
    }
    return(
        <section className="root flex column">
            <div className="container flex">
                <div className="logo-container">
                    <img src={logo} className="logo-image"/>
                </div>
                <form className='login-form flex column' onSubmit={submit}>
                    <Input
                    type={'email'}
                    placeholder={"Enter your email"}
                    name={"landing-input"}
                    label={"Email"}
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Input
                    type={'password'}
                    placeholder={"Enter your password"}
                    name={"landing-input"}
                    label={"Password"}
                    onChange={(e)=>setPassword(e.target.value)}/>  
                    {errorfield}
                    <input type={"submit"} value="LOGIN" className="btn-login"/>

                </form>
            </div>
        </section>
    );
}
export default Landing;