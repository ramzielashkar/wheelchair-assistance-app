import { updateUser } from "../../Redux/Slices/userSlice"
import { store } from "../../Redux/store"
import axiosInstance from '../axios/index'
import { getToken } from "../getToken"
export default (queryClient)=>{
//function to change profile picture
const token = getToken()
queryClient.setMutationDefaults(["UPDATE_PICTURE"],{
    mutationFn: (payload) => 
        axiosInstance(getToken()).put(`client/profilepic`, {...payload}).then((res) => res.data),
        onSuccess: (data) => { 
        //console.log(data.user)       
          /* store.dispatch(updateUser({
                user: data.user
            }))*/
        },
        onError:(err)=>{
           // console.log(err.response)
        }
})

//function to update profile 
queryClient.setMutationDefaults(["UPDATE_PROFILE"],{
    mutationFn: (payload) => 
        axiosInstance(getToken()).put(`client/editprofile`, {...payload}).then((res) => res.data),
        onSuccess: (data) => { 
        console.log(data.user)       
          store.dispatch(updateUser({
                user: data.user
            }))
        },
        onError:(err)=>{
           console.log(err.response)
        }
})
}