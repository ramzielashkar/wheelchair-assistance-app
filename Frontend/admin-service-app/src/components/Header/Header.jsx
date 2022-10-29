import logo from '../../assets/images/logo.jpg'
const Header = ()=>{
    return(
        <nav className="navbar flex">
            <div className="logo">
                <img src={logo} alt="" className="logo-img" />
            </div>
            <h1 className='title'>Wheel of life</h1>
        </nav>
    );
}

export default Header;