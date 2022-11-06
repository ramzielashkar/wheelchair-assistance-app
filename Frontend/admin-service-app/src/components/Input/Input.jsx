import './styles.css';
const Input = ({name, placeholder, onChange, label, type, value, disabled})=> {
    if(type=="select"){
        return(
            <>
            <label htmlFor="email">{label}</label>
            <select className={name} name="type">
                <option value={"Hospital"}>Hospital</option>
                <option value={"Vendor"}>Vendor</option>
                <option value={"Restaurant"}>Restaurant</option>
            </select>
            </>
        );
    }else{
    return(
        <>
        <label htmlFor={placeholder}>{label}</label>
        <input type={type} placeholder={placeholder} className={name} defaultValue={value} id={placeholder} disabled={disabled}/>
        </>
    );
    }
}

export default Input;
