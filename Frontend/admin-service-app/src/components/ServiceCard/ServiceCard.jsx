import './style.css';
import service from '../../assets/images/images.jpeg';
import {MdOutlineDeleteOutline,MdUndo} from 'react-icons/md';
const ServiceCard = ({name, location, path, content, id, onClick})=>{

    if(content=='service'){
    if(path=='active'){
    return(
        <div className='service-card flex column'>
            <img src={service} alt="" className='service-img' />
            <div className="flex column service-info">
                <p className='service-name'>{name}</p>
                <p className='service-loc'>{location}</p>
            </div>
            <div className='flex delete'>
                <MdOutlineDeleteOutline size={30} color={"#0A61E1"} onClick={onClick}/>
            </div>
        </div>
    );
    }
    else{
        return(
            <div className='service-card flex column'>
                <img src={service} alt="" className='service-img' />
                <div className="flex column service-info">
                    <p className='service-name'>{name}</p>
                    <p className='service-loc'>{location}</p>
                </div>
                <div className='flex delete'>
                    <MdUndo size={30} color={"#0A61E1"} onClick={onClick}/>
                </div>
            </div>
        );
    }
}
else if(content=="follower"){
    return(
        <div className='service-card flex column'>
            <img src={service} alt="" className='service-img' />
            <div className="flex column service-info">
                <p className='service-name follower'>{name}</p>
            </div>
        </div>
    );
}
else{
    if(path=='active'){
        return(
            <div className='service-card flex column'>
                <img src={service} alt="" className='service-img' />
                <div className="flex column service-info">
                    <p className='service-name'>{name}</p>
                </div>
                <div className='flex delete'>
                    <MdOutlineDeleteOutline size={30} color={"#0A61E1"} onClick={onClick}/>
                </div>
            </div>
        );
        }
        else{
            return(
                <div className='service-card flex column'>
                    <img src={service} alt="" className='service-img' />
                    <div className="flex column service-info">
                        <p className='service-name'>{name}</p>
                    </div>
                    <div className='flex delete'>
                        <MdUndo size={30} color={"#0A61E1"} onClick={onClick}/>
                    </div>
                </div>
            );
        }
}
}
export default ServiceCard;