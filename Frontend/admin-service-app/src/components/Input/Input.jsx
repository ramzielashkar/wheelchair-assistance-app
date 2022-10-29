import './styles.css';
const Input = ({name, placeholder, onChange, label, type })=> {
    return(
        <>
        <label htmlFor="email">{label}</label>
        <input type={type} placeholder={placeholder} className={name} id="email"/>
        </>
    );
}

export default Input;
