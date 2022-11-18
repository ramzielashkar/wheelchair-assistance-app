import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import  axiosInstance  from "../axios/axios";
import { getToken } from "../getToken";
export const ALL_ACTIVE_CLIENTS_KEY = ["ALL_ACTIVE_CLIENTS_KEY"]

export const ALL_BANNED_CLIENTS_KEY = ["ALL_BANNED_CLIENTS_KEY"]


export const buildActiveClientByIdKey = (id) => ["ACTIVE_CLIENT_BY_ID:" , id]

export const buildBannedClientByIdKey = (id) => ["BANNED_CLIENT_BY_ID:" , id]

//function to get active clients
export const getActiveClients = ()=>axiosInstance(getToken()).get("/admin/clients").then((res)=>res.data)

//function to get banned clients
export const getBannedClients = ()=>axiosInstance(getToken()).get("/admin/clients/banned").then((res)=>res.data)

//function to use active clients
export const useActiveClients = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_ACTIVE_CLIENTS_KEY,
        queryFn: async () => await getActiveClients(),
        onSuccess: (data) => {
            data.clients.map((client) => {
                queryClient.setQueryData(buildActiveClientByIdKey(client.id), {...client})
            })
        },
        staleTime: Infinity,
        
    }
)

//function to use active clients
export const useBannedClients = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_BANNED_CLIENTS_KEY,
        queryFn: async () => await getBannedClients(),
        placeholderData: { info : {} , results: []},
        onSuccess: (data) => {
            data.clients.map((client) => {
                queryClient.setQueryData(buildBannedClientByIdKey(client.id), {...client})
            })
        },
        staleTime: Infinity,
    }
)