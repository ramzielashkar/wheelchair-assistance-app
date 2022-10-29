import './style.css';
import logo from '../../assets/images/logo.jpg';
import { AdminSideBarData } from '../../data/AdminSideBarData';
import { useState } from 'react';
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
                    <div className="flex item">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </div>
                );
            })}
            <div className='flex profile-item' onClick={()=>{{setLogoutPopup(!logoutPopup)}}}>
                <img className='profile-img' src={logo} alt="" width={40} height={40} />
                <p>Ramzi El Ashkar</p>
                {logoutContainer}
            </div>
            
        </div>
    );
}

export default AdminSideBar;