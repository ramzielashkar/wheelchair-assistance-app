import profilePic from '../../assets/images/images.jpeg'
import { MdAddAPhoto ,MdDone} from "react-icons/md";
import {useState} from 'react';
import './style.css'
const ProfilePicture = ()=>{
    const [img, setImg] = useState(profilePic);
    const [base64, setBase64]= useState('');

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
                            <MdDone color='white' size={30}/>                  
                        </div>
                    <div></div>
                <input id='image' type="file" hidden onChange={onImageChange} />
            </div>
        </section>
    );
}
export default ProfilePicture;