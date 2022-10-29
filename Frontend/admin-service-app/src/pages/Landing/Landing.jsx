import './style.css';
import logo from '../../assets/images/logo.jpg';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Landing =()=>{
    const navigate = useNavigate();
    const login =()=>{
        navigate('/admin');
    }
    const [error, setError]= useState(false);
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
                <form className='login-form flex column' onSubmit={login}>
                    <Input
                    type={'email'}
                    placeholder={"Enter your email"}
                    name={"landing-input"}
                    label={"Email"}/>
                    <Input
                    type={'password'}
                    placeholder={"Enter your password"}
                    name={"landing-input"}
                    label={"Password"}/>  
                    {errorfield}
                    <input type={"submit"} value="LOGIN" className="btn-login" onClick={()=>{setError(true)}}/>

                </form>
            </div>
        </section>
    );
}
export default Landing;