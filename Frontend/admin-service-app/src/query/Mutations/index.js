import { axiosInstance } from "../axios/axios"
import { ALL_ACTIVE_SERVICES_KEY, ALL_BANNED_SERVICES_KEY } from "../ServiceProviders/useServiceProviders"
import { ALL_ACTIVE_CLIENTS_KEY, ALL_BANNED_CLIENTS_KEY } from "../AdminClients/useClients"
import { useQuery} from "@tanstack/react-query";
import { store } from "../../Redux/store";
import { updateUser } from "../../Redux/slices/userSlice";

export default (queryClient)=>{
//function to ban/unban service provider
 queryClient.setMutationDefaults(["TOGGLE_SERVICE"],{
    mutationFn: (id) => 
        axiosInstance.put(`admin/banService/${id}`).then((res) => res.data),
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
        axiosInstance.put(`admin/banClient/${id}`).then((res) => res.data),
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
        axiosInstance.post(`admin/addUser`, {...payload}).then((res) => res.data),
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
        axiosInstance.put(`service/profilepic`, {...payload}).then((res) => res.data),
        onSuccess: (data) => {        
           store.dispatch(updateUser({
                user: data.user
            }))
        },
        onError:(err)=>{
        }
})

}

