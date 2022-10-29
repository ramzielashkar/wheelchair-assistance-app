import { Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import './style.css';
const AdminServices = ()=>{
    const navigate = useNavigate();
    const [active, setActive] = useState(true);
    const [banned, setBanned]=useState(false);
    const showBanned = ()=>{
        setBanned(true);
        setActive(false);
        navigate('banned');
    }
    const showActive = ()=>{
        setBanned(false);
        setActive(true);
        navigate('active');
    }
    return(
        <section className="flex column services-section">
            <div className="services-header flex">
                <div className="flex">
                    <p className={
                    active ? "services-title selected" : "services-title" }
                     onClick={showActive}>Service Providers</p>
                    <p className={
                    banned ? "services-title selected" : "services-title" }
                     onClick={showBanned}>Banned</p>
                </div>
                <Button
                text={"Add Service Provider"}/>
            </div>
            <Outlet/>
        </section>
    );

}

export default AdminServices;