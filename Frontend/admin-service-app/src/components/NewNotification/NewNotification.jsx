import './style.css';
import {MdOutlineClose} from 'react-icons/md';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

const NewNotification = ({isOpen, onClose})=>{
        const [notification, setNotification] = useState('')
        const {mutate} = useMutation(["NOTIFY"]);

        //function to send notification
        const sendNotification = (e)=>{
            e.preventDefault();
            const payload ={
                notification
            }
            mutate(payload)
            onClose()
        }
        if(isOpen){
            return(
                <section className='flex column new-notification-section'>
                    
                    <form className='flex column new-notification-form' onSubmit={sendNotification}>
                    <div className='new-notification-header flex'>
                        <p>New Notification</p>
                        <div className='flex close-popup' onClick={onClose}>
                        <MdOutlineClose size={30}/>
                        </div>
                    </div>
                        <textarea className="new-notification" required cols={60} rows={20} placeholder="New Notification..." onChange={(e)=>setNotification(e.target.value)}></textarea>
                        <div className="flex btns">
                        <input type={'submit'} className="btn" value={"Send Notification"}></input>
                        </div>
                        
                    </form>
                </section>
            );
            }else{
                return null;
            }
}
export default NewNotification;