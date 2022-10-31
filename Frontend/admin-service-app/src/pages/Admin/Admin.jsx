import AdminSideBar from "../../components/AdminSideBar/AdminSideBar";
import { Outlet } from "react-router-dom";

const Admin = () =>{
    return (
      <div className="admin-page flex">
      <AdminSideBar />
      <Outlet />
      </div>
    );
};

export default Admin;
