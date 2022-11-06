import './style.css';
import logo from '../../assets/images/logo.jpg';
import { AdminSideBarData } from '../../data/AdminSideBarData';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMoreVert } from "react-icons/md";
import { useCurrentUser } from '../../query/auth/auth';
import { baseUrl } from '../../query/axios/axios';
const AdminSideBar = () =>{
    const [user, setUser] = useState('');
    const [logoutPopup, setLogoutPopup] = useState(false);
     const currentUser  =  useCurrentUser().then((res)=>{
        setUser(res)
    });
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
            <div className="flex column sidebar-end">
                {user &&<div className='flex profile-item' onClick={()=>{setLogoutPopup(!logoutPopup)}}>
                    <img className='profile-img' src={`${baseUrl}/public/${user.data.user.profile_picture}`} alt="" width={40} height={40} />
                    <p className='username'>{user.data.user.name}</p>
                    <div className={
                        logoutPopup? "logoutContainer" : "hidden"
                    }>Logout</div>
                    <MdMoreVert className='more' color='#3a3a3a' size={30}/>
                </div>
                }
            </div>
           
            
        </div>
    );
        
}

export default AdminSideBar;