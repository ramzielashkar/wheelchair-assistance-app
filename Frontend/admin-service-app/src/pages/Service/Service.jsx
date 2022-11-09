import { Outlet } from "react-router-dom";
import ServiceSideBar from "../../components/ServiceSideBar/ServiceSideBar";

const Service = () =>{
    return(
        <div className="flex">
            <ServiceSideBar/>
            <Outlet/>
        </div>
    );
}

export default Service;