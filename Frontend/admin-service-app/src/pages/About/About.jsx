import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './style.css';
const About = ()=>{
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('hello')
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
                value={"Name"}
                disabled={isDisabled}
                />
                <Input
                name={"landing-input"}
                label={"Location"}
                value={"Location"}
                disabled={isDisabled}

                />
                <label htmlFor="description">Description</label>
                <textarea rows={5} defaultValue={'Description'} className="about-description" id="description" disabled={isDisabled}></textarea>

                <label htmlFor="hours">Working Hours</label>
                <textarea rows={5} defaultValue={'Working Hours'} className="about-description" disabled={isDisabled} id="hours"></textarea>
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