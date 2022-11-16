import profilePic from '../../assets/images/images.jpeg'
import { MdAddAPhoto ,MdDone} from "react-icons/md";
import {useState} from 'react';
import './style.css'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { baseUrl } from '../../configurations/configurations';
const ProfilePicture = ()=>{
    // getting logged in user
    const loggedInUser = useSelector((state)=>state.user)
    const [img, setImg] = useState(`${baseUrl}/public/${loggedInUser.profile_picture}`);
    const [base64, setBase64]= useState('');

    // Calling update profile picture mutation
    const { mutate } = useMutation(["UPDATE_PICTURE"]);

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
    }
    return(
        <section className="flex column profile-pic-section">
            <div className=' flex profile-pic'>
                <img src={img} alt="" className="profile-image"/>
                    <label htmlFor="image" className ={
                            base64 ? "hidden" : "edit-pic flex"
                        }>                    
                        <MdAddAPhoto color='white' size={30} />
                    </label>
                    <div className ={
                            !base64 ? "hidden" : "edit-pic flex"
                        }>
                            <MdDone color='white' size={30} onClick={()=>{
                                mutate({image:base64})
                                setBase64('')}}/>                  
                        </div>
                    <div></div>
                <input id='image' type="file" hidden onChange={onImageChange} />
            </div>
        </section>
    );
}
export default ProfilePicture;