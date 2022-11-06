import './style.css';
import Button from '../Button/Button';
import {MdOutlineClose} from 'react-icons/md';

const NewNotification = ({isOpen, onClose})=>{
        if(isOpen){
            return(
                <section className='flex column new-notification-section'>
                    
                    <form className='flex column new-notification-form'>
                    <div className='new-notification-header flex'>
                        <p>New Notification</p>
                        <div className='flex close-popup' onClick={onClose}>
                        <MdOutlineClose size={30}/>
                        </div>
                    </div>
                        <textarea className="new-notification" cols={60} rows={20} placeholder="New Notification..."></textarea>
                        <div className="flex btns">
                        <Button
                        text={"Send Notification"}
                        onClick={onClose}
                        />
                        </div>
                        
                    </form>
                </section>
            );
            }else{
                return null;
            }
}
export default NewNotification;