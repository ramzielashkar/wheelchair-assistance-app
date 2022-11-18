import { queryClient } from "../../App";
import axiosInstance from '../axios/index'

export const registerUser = async (payload) =>{
    return await axiosInstance(' ').post("client/signup", payload);
} 
export const loginUser = async (payload) =>{
    return await axiosInstance(' ').post("client/login", payload);
} 