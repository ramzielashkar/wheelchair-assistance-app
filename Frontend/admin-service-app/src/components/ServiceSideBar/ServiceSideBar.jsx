import './style.css';
import logo from '../../assets/images/logo.jpg';
import { ServiceSideBarData } from '../../data/ServiceSideBarData';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMoreVert } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { baseUrl } from '../../query/axios/axios';

const ServiceSideBar = () =>{
        const loggedInUser = useSelector((state)=>state.user)
        const [logoutPopup, setLogoutPopup] = useState(false);
        let logoutContainer;
        if(logoutPopup){
            logoutContainer = <div className='logoutContainer'>Logout</div>
        }else{
            logoutContainer = <div className='logoutContainer hidden'>Logout</div>
        }
        return(
            <div className="flex column admin-sidebar">
                {ServiceSideBarData.map((item, index)=>{
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
                    <div className='flex profile-item' onClick={()=>{{setLogoutPopup(!logoutPopup)}}}>
                        <img className='profile-img' src={`${baseUrl}/public/${loggedInUser.profile_picture}`} alt="" width={40} height={40} />
                        <p className='username'>{loggedInUser.name}</p>
                        {logoutContainer}
                        <MdMoreVert className='more' color='#3a3a3a' size={30}/>
                    </div>
                </div>
                
                
            </div>
        );
}
export default ServiceSideBar;