import { updateUser } from "../../Redux/Slices/userSlice"
import { store } from "../../Redux/store"
import axiosInstance from '../axios/index'
import { getToken } from "../getToken"
import { ALL_FAVORITES } from "../Favorites/useFavorites"
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
        },
        onError:(err)=>{
           console.log(err.response)
        }
})
//function to follow service provider 
queryClient.setMutationDefaults(["FOLLOW"],{
    mutationFn: (id) => 
        axiosInstance(getToken()).put(`client/follow/${id}`).then((res) => res.data),
        onSuccess: (data) => { 
            queryClient.invalidateQueries({
                queryKey: ALL_FAVORITES
            })
        },
        onError:(err)=>{
           console.log(err.response)
        }
})
//function to follow service provider 
queryClient.setMutationDefaults(["UNFOLLOW"],{
    mutationFn: (id) => 
        axiosInstance(getToken()).delete(`client/unfollow/${id}`).then((res) => res.data),
        onSuccess: (data) => { 
            queryClient.invalidateQueries({
                queryKey: ALL_FAVORITES
            })
        },
        onError:(err)=>{
           console.log(err.response)
        }
})
}