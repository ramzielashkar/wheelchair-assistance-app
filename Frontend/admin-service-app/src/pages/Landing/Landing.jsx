import './style.css';
import logo from '../../assets/images/logo.jpg';
const Landing =()=>{
    return(
        <section className="root flex column">
            <div className="container flex">
                <div className="logo">
                    <img src={logo} className="logo-image"/>
                </div>
                <form className='login-form flex column'>
                    hello
                </form>
            </div>
        </section>
    );
}
export default Landing;