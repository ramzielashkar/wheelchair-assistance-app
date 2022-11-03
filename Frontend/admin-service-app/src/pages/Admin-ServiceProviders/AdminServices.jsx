import { Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import './style.css';
import {MdAdd} from 'react-icons/md';
import NewService from '../../components/NewService/NewService';
const AdminServices = ()=>{
    const navigate = useNavigate();
    const [active, setActive] = useState(true);
    const [banned, setBanned]=useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const showAddService = ()=>{
        setIsOpen(true);
    }
    const closeAddService = ()=>{
        setIsOpen(false);
    }
    const showBanned = ()=>{
        setBanned(true);
        setActive(false);
        navigate('banned');
    }
    const showActive = ()=>{
        setBanned(false);
        setActive(true);
        navigate('');
    }
    return(
        <section className="flex column services-section">
            <div className="services-header flex">
                <div className="flex titles">
                    <p className={
                    active ? "services-title selected" : "services-title" }
                     onClick={showActive}>Service Providers</p>
                    <p className={
                    banned ? "services-title selected banned" : "services-title banned" }
                     onClick={showBanned}>Banned</p>
                </div>
                <div className="add">
                    <Button
                    text={"Add Service Provider"}
                    onClick={showAddService}/>
                </div>
                
                <div className="add-btn" onClick={showAddService}>
                        <MdAdd size={40} color={"white"}/>
                </div>
            </div>
            <NewService
            isOpen={isOpen}
            onClose={closeAddService}/>
            <Outlet/>
        </section>
    );

}

export default AdminServices;