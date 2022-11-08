import './style.css';
import {MdOutlineClose} from 'react-icons/md';
import Button from '../Button/Button';
import { useMutation } from '@tanstack/react-query';
const NewPicture = ({isOpen, onClose, image, base64})=>{

    // Calling mutation to add picture
    const { mutate } = useMutation(["ADD_PICTURE"])

    //handling submission
    const handleSubmit = (e)=>{
        console.log(base64)
        mutate({image: base64})
        onClose()
    }
    if(!isOpen){
        return null;
    }else{
    return(
        <section className="flex column new-picture-section">
            <form className="flex column new-picture-form">
                <div className="flex new-picture-header">
                    <p className="new-picture-title">New Picture</p>
                    <div className='flex close-popup' onClick={onClose}>
                        <MdOutlineClose size={30}/>
                    </div>
                </div>
                <form className="flex column new-picture">
                    <img src={image} alt="" className='chosen-pic' />
                    <div className="flex post-btn">
                        <input type={"button"} value="POST" className="btn" onClick={handleSubmit}/>
                     </div>
                </form>
                
            </form>
        </section>
    );
    }
}
export default NewPicture;