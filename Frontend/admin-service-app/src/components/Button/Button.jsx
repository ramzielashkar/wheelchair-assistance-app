import './style.css'
const Button = ({text, onClick})=>{
    return(
        <button className="btn" onClick={onClick}>{text}</button>
    );
}
export default Button;