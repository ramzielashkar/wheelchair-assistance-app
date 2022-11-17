import  axiosInstance  from "../axios/axios"
import { ALL_ACTIVE_SERVICES_KEY, ALL_BANNED_SERVICES_KEY } from "../ServiceProviders/useServiceProviders"
import { ALL_ACTIVE_CLIENTS_KEY, ALL_BANNED_CLIENTS_KEY } from "../AdminClients/useClients"
import { useQuery} from "@tanstack/react-query";
import { store } from "../../Redux/store";
import { updateUser } from "../../Redux/slices/userSlice";
import { ALL_PICTURES_KEY } from "../ServicePictures/useServicePictures";
import { getToken } from "../getToken";
import { ALL_NOTIFICATIONS_KEY } from "../ServiceNotifications/useNotifications";
export default (queryClient)=>{
    const token = localStorage.getItem('token')
    console.log(token)
//function to ban/unban service provider
 queryClient.setMutationDefaults(["TOGGLE_SERVICE"],{
    mutationFn: (id) => 
        axiosInstance(getToken()).put(`admin/banService/${id}`).then((res) => res.data),
        onSuccess: (data) => {        
            // Fetch all Services again 
            queryClient.invalidateQueries({
                queryKey: ALL_ACTIVE_SERVICES_KEY
            })
            queryClient.invalidateQueries({
                queryKey: ALL_BANNED_SERVICES_KEY
            })
        }
})


//function to ban/unban service provider
queryClient.setMutationDefaults(["TOGGLE_CLIENT"],{
    mutationFn: (id) => 
        axiosInstance(getToken()).put(`admin/banClient/${id}`).then((res) => res.data),
        onSuccess: (data) => {        
            // Fetch all Services again 
            queryClient.invalidateQueries({
                queryKey: ALL_ACTIVE_CLIENTS_KEY
            })
            queryClient.invalidateQueries({
                queryKey: ALL_BANNED_CLIENTS_KEY
            })
        }
})



//function to add service provider
queryClient.setMutationDefaults(["ADD_SERVICE"],{
    mutationFn: (payload) => 
        axiosInstance(getToken()).post(`admin/addUser`, {...payload}).then((res) => res.data),
        onSuccess: (data) => {        
            // Fetch all Services again 
            queryClient.invalidateQueries({
                queryKey: ALL_ACTIVE_SERVICES_KEY
            })
            queryClient.invalidateQueries({
                queryKey: ALL_BANNED_SERVICES_KEY
            })
        },
        onError:(err)=>{
        }
})

//function to change profile picture
queryClient.setMutationDefaults(["UPDATE_PICTURE"],{
    mutationFn: (payload) => 
        axiosInstance(getToken()).put(`service/profilepic`, {...payload}).then((res) => res.data),
        onSuccess: (data) => {        
           store.dispatch(updateUser({
                user: data.user
            }))
        },
        onError:(err)=>{
        }
})

//function to delete picture
queryClient.setMutationDefaults(["DELETE_PICTURE"],{
    mutationFn: (id) => 
        axiosInstance(getToken()).delete(`service/picture/${id}`).then((res) => res.data),
        onSuccess: (data) => {        
            queryClient.invalidateQueries({
                queryKey: ALL_PICTURES_KEY
            })
        },
})

//function to add picture
queryClient.setMutationDefaults(["ADD_PICTURE"],{
    mutationFn: (payload) => 
        axiosInstance(getToken()).post(`service/picture`, {...payload}).then((res) => res.data),
        onSuccess: (data) => {        
            // Fetch all pictures again 
            queryClient.invalidateQueries({
                queryKey: ALL_PICTURES_KEY
            })
        },
})

//function to update profile 
queryClient.setMutationDefaults(["UPDATE_PROFILE"],{
    mutationFn: (payload) => 
        axiosInstance(getToken()).put(`service/editprofile`, {...payload}).then((res) => res.data),
        onSuccess: (data) => {  
           store.dispatch(updateUser({
                user: data.user
            }))
        },
        onError:(err)=>{
        }
})
//function to send notifications 
queryClient.setMutationDefaults(["NOTIFY"],{
    mutationFn: (payload) => 
        axiosInstance(getToken()).post(`service/notify`, {...payload}).then((res) => res.data),
        onSuccess: (data) => {  
            queryClient.invalidateQueries({
                queryKey: ALL_NOTIFICATIONS_KEY
            })
        },
        onError:(err)=>{
        }
})
}

