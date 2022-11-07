import { axiosInstance } from "../axios/axios"
import { ALL_ACTIVE_SERVICES_KEY, ALL_BANNED_SERVICES_KEY } from "../ServiceProviders/useServiceProviders"
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
}