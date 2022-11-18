import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { queryClient } from "../../App";
import axiosInstance from '../axios/axios'

export const loginUser = async (payload) =>{
    return await axiosInstance('').post("auth/login", payload);
} 
// use current user
export const useCurrentUser = async ()=>{
    return await queryClient.getQueryData(["CurrentUser"])
}