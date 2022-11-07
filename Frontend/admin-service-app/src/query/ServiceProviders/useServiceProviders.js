import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import { axiosInstance } from "../axios/axios";

export const ALL_ACTIVE_SERVICES_KEY = ["ALL_ACTIVE_SERVICES_KEY"]

export const ALL_BANNED_SERVICES_KEY = ["ALL_BANNED_SERVICES_KEY"]


export const buildActiveServiceByIdKey = (id) => ["ACTIVE_SERVICE_BY_ID:" , id]

export const buildBannedServiceByIdKey = (id) => ["BANNED_SERVICE_BY_ID:" , id]

//function to get active service providers
export const getActiveServices = ()=>axiosInstance.get("/admin/services").then((res)=>res.data)

//function to get banned service providers
export const getBannedServices = ()=>axiosInstance.get("/admin/services/banned").then((res)=>res.data)

//function to get service provider
export const getServiceById = (id) => axiosInstance.get("/episode/"+id).then((res) => res.data)

//function to use active service providers
export const useActiveServices = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_ACTIVE_SERVICES_KEY,
        queryFn: async () => await getActiveServices(),
        placeholderData: { info : {} , results: []},
        onSuccess: (data) => {
            data.service_providers.map((service) => {
                queryClient.setQueryData(buildActiveServiceByIdKey(service.id), {...service})
            })
        },
        staleTime: Infinity,
        
    }
)

//function to use active service providers
export const useBannedServices = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_BANNED_SERVICES_KEY,
        queryFn: async () => await getBannedServices(),
        placeholderData: { info : {} , results: []},
        onSuccess: (data) => {
            data.service_providers.map((service) => {
                queryClient.setQueryData(buildBannedServiceByIdKey(service.id), {...service})
            })
        },
        staleTime: Infinity,
    }
)

//function to ban/unban service provider
export const toggleBanService = ({id}) => queryClient.setMutationDefaults(["TOGGLE_SERVICE"],{
    mutationFn: () => axiosInstance.put(`/banService/${{id}}`).then((res) => res.data),
        onSuccess: (data) => {        
            console.log(data)    
            // Fetch all Services again 
            queryClient.invalidateQueries({
                queryKey: ALL_ACTIVE_SERVICES_KEY, ALL_BANNED_SERVICES_KEY
            })
        }
})

