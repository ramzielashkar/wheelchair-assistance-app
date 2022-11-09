import logo from '../../assets/images/logo.jpg';
import './style.css';
const Header = ()=>{
    return(
        <nav className="navbar flex">
            <div className="logo">
                <img src={logo} alt="" className="logo-img"height={80} width={80} />
            </div>
            <p className='title'>Wheel of Life</p>
        </nav>
    );
}

export default Header;