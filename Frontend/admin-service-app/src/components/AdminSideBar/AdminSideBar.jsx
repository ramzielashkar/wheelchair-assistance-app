import './style.css';
import logo from '../../assets/images/logo.jpg';
import { AdminSideBarData } from '../../data/AdminSideBarData';
const AdminSideBar = () =>{
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
            <div className='flex profile-item'>
                <img className='profile-img' src={logo} alt="" width={40} height={40} />
                <p>Ramzi El Ashkar</p>
            </div>
        </div>
    );
}

export default AdminSideBar;