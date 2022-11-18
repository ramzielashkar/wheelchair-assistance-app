import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import axiosInstance from '../axios/index'
import { getToken } from "../getToken";

export const ALL_RESULTS = ["ALL_RESULTS"]
export const buildResultByIdKey = (id) => ["Result_BY_ID:" , id]

//function to search for service providers
export const getResults = (payload)=>axiosInstance(getToken()).get(`/client/search/${payload}`).then((res)=>res.data)

//function to use search results
export const useResults = (payload) => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_RESULTS,
        queryFn: async () => await getResults(payload),
        onSuccess: (data) => {
        },
        
    }
)