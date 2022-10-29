import './style.css';
import logo from '../../assets/images/logo.jpg';
import { AdminSideBarData } from '../../data/AdminSideBarData';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const AdminSideBar = () =>{
    const [logoutPopup, setLogoutPopup] = useState(false);
    let logoutContainer;
    if(logoutPopup){
        logoutContainer = <div className='logoutContainer'>Logout</div>
    }else{
        logoutContainer = <div className='logoutContainer hidden'>Logout</div>
    }
    return(
        <div className="flex column admin-sidebar">
            {AdminSideBarData.map((item, index)=>{
                return(
                    <NavLink to={item.path} 
                    className={({isActive})=>
                    isActive ? "active" : "normal" 
                    } >  
                        <span>{item.icon}</span>
                        <span className='nav-title'>{item.title}</span>
                    </NavLink>
                );
            })}
            <div className='flex profile-item' onClick={()=>{{setLogoutPopup(!logoutPopup)}}}>
                <img className='profile-img' src={logo} alt="" width={40} height={40} />
                <p className='username'>Ramzi El Ashkar</p>
                {logoutContainer}
            </div>
            
        </div>
    );
}

export default AdminSideBar;