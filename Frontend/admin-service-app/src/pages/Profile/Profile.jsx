import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
const Profile =()=>{
    const navigate = useNavigate();
    const [profile, setProfile] = useState(true);
    const [pictures, setPictures]=useState(false);
    const [about, setAbout] = useState(false);

    const showProfile = ()=>{
        setProfile(true);
        setPictures(false);
        setAbout(false);
        navigate("");
    }
    const showPictures = ()=>{
        setProfile(false);
        setPictures(true);
        setAbout(false);
        navigate("pictures");

    }
    const showAbout = ()=>{
        setProfile(false);
        setPictures(false);
        setAbout(true);
        navigate("about")
    }
    
    return(
        <section className="flex column profile-section">
            <div className="profile-header flex">
                    <p className={
                    profile ? "profile-title selected" : "profile-title" }
                     onClick={showProfile}>Profile</p>
                    <p className={
                    about ? "profile-title selected " : "profile-title " }
                     onClick={showAbout}>About</p>
                     <p className={
                    pictures ? "profile-title selected " : "profile-title " }
                     onClick={showPictures}>Pictures</p>
            </div>
            <Outlet/>
        </section>
    );
}
export default Profile;