import Button from "../../components/Button/Button";
import './style.css';
import service from '../../assets/images/images.jpeg';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import { useState } from "react";
import NewPicture from "../../components/NewPicture/NewPicture";
import { usePictures } from "../../query/ServicePictures/useServicePictures";
import { CircularProgress } from "@mui/material";
import EmptyState from "../../components/EmptyState/EmptyState";
import { baseUrl } from "../../configurations/configurations";
import { useMutation } from "@tanstack/react-query";

const ServicePictures =()=>{

    //getting all pictures
    const { data: pictures, isLoading: isLoadingPictures, isFetching: isFetchingPictures, isFetched: fetched   } = usePictures();

    // mutation to delete pictures
    const { mutate } = useMutation(["DELETE_PICTURE"])

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

    // if pictures aren't fetched yet
    if(isLoadingPictures || isFetchingPictures){
        return(
            <CircularProgress/>
        );
    }
    //if no pictures
    if(fetched && pictures.pictures.pictures.length==0){
        return(
            <section className="flex column pictures-section">
            <div className="flex pictures-header">
                <label htmlFor="image" className="new-picture-btn">Add Picture</label>
            </div>
            <input id='image' type="file" hidden onChange={onImageChange} />
            <EmptyState content={'No Pictures'}/>
            <NewPicture
            isOpen={isOpen}
            onClose={closeNewPicture}
            base64={base64}
            image={img}/>
            </section>
            
        );
    }

    return(
        <section className="flex column pictures-section">
            <div className="flex pictures-header">
                <label htmlFor="image" className="new-picture-btn">Add Picture</label>
            </div>
            <input id='image' type="file" hidden onChange={onImageChange} />
            <div className="pictures-container">
            {pictures?.pictures?.pictures?.map((picture)=>{
                return(
                    <div className="flex picture-container">
                    <img className="service-picture" src={`${baseUrl}/public/${picture.picture}`} alt="" />
                    <MdOutlineDeleteOutline className="delete-pic" size={30} color={'#0A61E1'} onClick={()=>mutate(picture._id)}/>
                </div>
                )
            })}
                
                
            </div>
            <NewPicture
            isOpen={isOpen}
            onClose={closeNewPicture}
            image={img}
            base64={base64}/>
        </section>
    );
}
export default ServicePictures;