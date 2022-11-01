import Button from "../../components/Button/Button";
import './style.css';
import service from '../../assets/images/images.jpeg';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import { useState } from "react";
import NewPicture from "../../components/NewPicture/NewPicture";

const ServicePictures =()=>{

    const [img, setImg] = useState();
    const [base64, setBase64]= useState('');
    const [isOpen, setIsOpen] = useState(false);
    const showNewPicture = ()=>{
        setIsOpen(true);
    }
    const closeNewPicture = ()=>{
        setIsOpen(false);
    }
      //function to convert image to base64
      const getBase64 = (file, callBack) =>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callBack(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
      }
    }
        const onImageChange=(e)=>{
            const [file] = e.target.files;
            setImg(URL.createObjectURL(file));
            getBase64(file, (result) => {
              setBase64(result);
            });
            showNewPicture();
        }

    return(
        <section className="flex column pictures-section">
            <div className="flex pictures-header">
                <label htmlFor="image" className="new-picture-btn">Add Picture</label>
            </div>
            <input id='image' type="file" hidden onChange={onImageChange} />
            <div className="flex pictures-container">
                <div className="flex picture-container">
                    <img className="service-picture" src={service} alt="" />
                    <MdOutlineDeleteOutline className="delete-pic" size={30} color={'#0A61E1'}/>
                </div>
                <div className="flex picture-container">
                    <img className="service-picture" src={service} alt="" />
                    <MdOutlineDeleteOutline className="delete-pic" size={30} color={'#0A61E1'}/>
                </div>
                 <div className="flex picture-container">
                    <img className="service-picture" src={service} alt="" />
                    <MdOutlineDeleteOutline className="delete-pic" size={30} color={'#0A61E1'}/>
                </div>
                <div className="flex picture-container">
                    <img className="service-picture" src={service} alt="" />
                    <MdOutlineDeleteOutline className="delete-pic" size={30} color={'#0A61E1'}/>
                </div>
            </div>
            <NewPicture
            isOpen={isOpen}
            onClose={closeNewPicture}
            image={img}/>
        </section>
    );
}
export default ServicePictures;