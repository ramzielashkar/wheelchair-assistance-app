import Button from '../../components/Button/Button';
import './style.css';
import {MdAdd} from 'react-icons/md';
import NotificationCard from '../../components/NotificationCard/NotificationCard';

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
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>

    </section>
    );
}

export default ServiceNotifications;