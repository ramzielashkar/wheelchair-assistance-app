import Button from '../../components/Button/Button';
import './style.css';
import {MdAdd} from 'react-icons/md';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import NewNotification from '../../components/NewNotification/NewNotification';
import { useState } from 'react';
import EmptyState from '../../components/EmptyState/EmptyState';
import { useNotifications } from '../../query/ServiceNotifications/useNotifications';

const ServiceNotifications = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const showAddNotification=()=>{
        setIsOpen(true);
    } 
    const closeAddNotification=()=>{
        setIsOpen(false);
    } 
    let {data: notifications} = useNotifications();
    let Notifications = notifications?.notifications?.notifications.reverse();
    return(
        <section className="flex column notifications-section">
        <div className="notifications-header flex">
                <p className="notifications-title">Notifications</p>
                <div className="add">
                <Button
                onClick={showAddNotification}
                text={"New Notification"}/>
                </div>
                
                <div className="add-btn" onClick={showAddNotification}>
                        <MdAdd size={40} color={"white"}/>
                </div>
        </div>
        {Notifications?.length==0 && <EmptyState
        content={"No Notifications Sent"}/> }
        <div className="flex column notifications-container">
            {Notifications?.map((notification)=>{
                return(
                    <NotificationCard
                    content={notification.notification}
                    date={notification.date}/>

                );
            })}
           
        </div>
        
        
    

        <NewNotification
        isOpen={isOpen}
        onClose={closeAddNotification}/>

    </section>
    );
}

export default ServiceNotifications;