import Button from '../Button/Button';
import Input from '../Input/Input';
import './style.css';
const NewService = ({isOpen, onClose}) =>{
    if(isOpen){
    return(
        <section className='flex column new-service-section'>
            <form className='flex column new-service-form'>
                <Input
                name={"landing-input"}
                placeholder={"Enter Name:"}
                type={"text"}
                label={"Name"}
                />
                <Input
                name={"landing-input"}
                placeholder={"Enter Email:"}
                type={"email"}
                label={"Email"}
                />
                <Input
                name={"landing-input"}
                placeholder={"Enter Password:"}
                type={"password"}
                label={"Password"}
                />
                <Input
                name={"landing-input"}
                type={"select"}
                label={"Type"}
                />
                <Input
                name={"landing-input"}
                placeholder={"Enter Location:"}
                type={"text"}
                label={"Location"}
                />
                <div className="flex btns">
                <Button
                text={"Cancel"}
                onClick={onClose}
                />
                <Button
                text={"Save"}
                onClick={onClose}
                />
                </div>
                
            </form>
        </section>
    );
    }else{
        return null;
    }
}
export default NewService;