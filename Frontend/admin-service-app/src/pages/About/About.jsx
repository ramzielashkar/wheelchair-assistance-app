import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './style.css';
import { useSelector } from 'react-redux'
import { useMutation } from "@tanstack/react-query";

const About = ()=>{
    const loggedInUser = useSelector((state)=>state.user)
    const [location, setLocation] = useState(loggedInUser.location);
    const [name, setName] = useState(loggedInUser.name);
    const [description, setDescription] = useState(loggedInUser.description? loggedInUser.description : '');
    const [working_hours, setWorkingHours] = useState(loggedInUser.working_hours? loggedInUser.working_hours : '');

    //calling mutation
    const { mutate } = useMutation(["UPDATE_PROFILE"])
    //function to handle form submission
    const handleSubmit =(e)=>{
        e.preventDefault();
        const payload = {
            location,
            name,
            description,
            working_hours
        }
        mutate(payload)
        setIsDisabled(true);
        setEdit(false);
    }
    const [isDisabled, setIsDisabled] = useState(true);
    const [edit, setEdit] = useState(false);
    const editAbout = (e)=>{
        setIsDisabled(false);
        setEdit(true);
    }
    return(
        <section className=" about-section flex column">
            <div className={
                     !edit? "btn-container flex edit-btn": "hidden"
                }>
                    <Button onClick={editAbout}
                    text={"EDIT"}
                    />
                </div>
            <form className="flex column about-form" onSubmit={handleSubmit}>
                <Input
                name={"landing-input"}
                label={"Name"}
                value={loggedInUser.name}
                disabled={isDisabled}
                onChange={(e)=>setName(e.target.value)}
                />
                <Input
                name={"landing-input"}
                label={"Location"}
                value={loggedInUser.location}
                disabled={isDisabled}
                onChange={(e)=>setLocation(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <textarea rows={5} defaultValue={
                    loggedInUser.description? loggedInUser.description : 'Decription'
                } className="about-description" id="description" disabled={isDisabled} onChange={(e)=>setDescription(e.target.value)}></textarea>

                <label htmlFor="hours">Working Hours</label>
                <textarea rows={5} defaultValue={
                    loggedInUser.working_hours? loggedInUser.working_hours : "Working hours"
                } className="about-description" disabled={isDisabled} id="hours" onChange={(e)=>setWorkingHours(e.target.value)}></textarea>
                <div className={
                     edit? "btn-container flex": "hidden"
                }>
                    <Button
                    text={"SAVE"}
                    />
                </div>
                
            </form>
        </section>
    );
}
export default About;