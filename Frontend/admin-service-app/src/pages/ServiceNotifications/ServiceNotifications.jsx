import Button from '../../components/Button/Button';
import './style.css';
import {MdAdd} from 'react-icons/md';

const ServiceNotifications = ()=>{
    return(
        <section className="flex column notifications-section">
        <div className="notifications-header flex">
                <p className="notifications-title">Notifications</p>
                <div className="add">
                <Button
                text={"New Notification"}/>
                </div>
                
                <div className="add-btn" onClick={""}>
                        <MdAdd size={40} color={"white"}/>
                </div>
        </div>
    </section>
    );
}

export default ServiceNotifications;