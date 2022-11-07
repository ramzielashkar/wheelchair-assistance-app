import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './style.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { GOOGLE_MAP_API } from '../../configurations';
import Geocode from "react-geocode";
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../App';

const NewService = ({isOpen, onClose}) =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('Hospital');
    const [geoLocation, setGeoLocation] = useState({});
    const [pwdError, setPwdError] = useState(false);
    const [emailError, setEmaiError] = useState(false);

    const { mutate } = useMutation(["ADD_SERVICE"])

    //regex for valid password
    const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    // function to validate password
    const validatePassword = ()=>{
        if (!validPassword.test(password)) {
            setPwdError(true);
            return false
        }
            setPwdError(false)
            return true
        
    }
    //function to handle form submission
    const handleSubmit = (e)=>{
        e.preventDefault();
        const valid = validatePassword();
        if(valid){
        const payload ={
            name, 
            email, 
            password,
            location,
            type,
            geoLocation
        }
        mutate(payload) 
        
    }
        
    }
    if(isOpen){
    return(
        <section className='flex column new-service-section'>
            <form className='flex column new-service-form' onSubmit={handleSubmit}>
                <Input
                name={"landing-input"}
                placeholder={"Enter Name:"}
                type={"text"}
                label={"Name"}
                onChange={(e)=>setName(e.target.value)}
                />
                <Input
                name={"landing-input"}
                placeholder={"Enter Email:"}
                type={"email"}
                label={"Email"}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <Input
                name={"landing-input"}
                placeholder={"Enter Password:"}
                type={"password"}
                label={"Password"}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <Input
                name={"landing-input"}
                type={"select"}
                label={"Type"}
                onChange={(e)=>setType(e.target.value)}
                />
               { /*<label htmlFor="email">Location</label>
                <GooglePlacesAutocomplete
                apiKey={GOOGLE_MAP_API}
                 selectProps={{
                location,
                onChange: setLocation,
                }}
            />*/}
                <Input
                name={"landing-input"}
                placeholder={"Enter Location:"}
                type={"text"}
                label={"Location"}
                onChange={(e)=>setLocation(e.target.value)}
                />
                <p className={
                    pwdError? "passError": "hidden"
                }>Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number</p>
                <p className={
                    emailError? "passError": "hidden"
                }>Email already exists</p>
                <div className="flex btns">
                <Button
                text={"Cancel"}
                onClick={onClose}
                />
                <input type={"submit"} value="LOGIN" className="btn"/>

                </div>
                
            </form>
        </section>
    );
    }else{
        return null;
    }
}
export default NewService;