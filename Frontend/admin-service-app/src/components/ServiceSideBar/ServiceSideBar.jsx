import './style.css';
import logo from '../../assets/images/logo.jpg';
import { ServiceSideBarData } from '../../data/ServiceSideBarData';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMoreVert } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { store, persistor } from '../../Redux/store';
import { deleteUser } from '../../Redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../configurations/configurations';

const ServiceSideBar = () =>{
        const navigate = useNavigate();
        const loggedInUser = useSelector((state)=>state.user)
        const [logoutPopup, setLogoutPopup] = useState(false);

        //function to logout user
        const logout = ()=>{
            store.dispatch(deleteUser())
            localStorage.setItem('token', '')
            navigate('/')
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
                        <p className='username userName'>{loggedInUser.name}</p>
                        <div className={
                            logoutPopup? "logoutContainer" : "hidden"
                        } onClick={()=>logout()}>Logout</div>
                        <MdMoreVert className='more' color='#3a3a3a' size={30}/>
                    </div>
                </div>
                
                
            </div>
        );
}
export default ServiceSideBar;