import Button from "../../components/Button/Button";
import './style.css';
import service from '../../assets/images/images.jpeg';
import {MdOutlineDeleteOutline} from 'react-icons/md';

const ServicePictures =()=>{
    return(
        <section className="flex column pictures-section">
            <div className="flex pictures-header">
                <Button
                    text={"Add Picture"}
                />
            </div>
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
        </section>
    );
}
export default ServicePictures;