import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
const AdminClients = ()=>
{
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
        navigate('');
    }
 
        return(
            <section className="flex column clients-section">
                <div className="clients-header flex">
                    <div className="flex titles">
                        <p className={
                        active ? "clients-title selected" : "clients-title" }
                         onClick={showActive}>Clients</p>
                        <p className={
                        banned ? "clients-title selected banned" : "clients-title banned" }
                         onClick={showBanned}>Banned</p>
                    </div>

                </div>
                <Outlet/>
            </section>
        );
}

export default AdminClients;