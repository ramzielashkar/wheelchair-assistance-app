import { Navigate } from "react-router-dom";
import { AuthVerify } from "../authorization/jwtVerify";
import { deleteUser } from "../Redux/slices/userSlice";
import { store } from "../Redux/store";

const Protected =({children})=>{
    const validToken = AuthVerify()
    if(!localStorage.getItem('token')){
        return <Navigate to="/" replace />;
    }else if(!validToken ){
        localStorage.setItem('token', '')
        store.dispatch(deleteUser())
        return <Navigate to="/" replace />;
    }
    return children
}
export default Protected