import './style.css';
import {MdOutlineClose} from 'react-icons/md';
import Button from '../Button/Button';
const NewPicture = ({isOpen, onClose, image})=>{
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
                <div className="flex new-picture">
                    <img src={image} alt="" className='chosen-pic' />
                </div>
                <div className="flex post-btn">
                    <Button text={"Post"}/>
                </div>
            </form>
        </section>
    );
    }
}
export default NewPicture;