import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import  axiosInstance  from "../axios/axios";
import { getToken } from "../getToken";
export const USERS_COUNT = ["USERS_COUNT"]

// function to fetch users count 
export const getUsersCount = ()=>axiosInstance(getToken()).get("/admin/count").then((res)=>res.data)

//function to use users count
export const useStats = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: USERS_COUNT,
        queryFn: async () => await getUsersCount(),
        onSuccess: (data) => {
            console.log(data)
        },
        staleTime: Infinity,
        
    }
)
