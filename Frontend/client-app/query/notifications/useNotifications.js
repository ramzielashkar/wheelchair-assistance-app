import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import axiosInstance from '../axios/index'
import { getToken } from "../getToken";
export const ALL_NOTIFICATIONS_KEY = ["ALL_NOTIFICATIONS_KEY"]

//function to get notifications
export const getNotifications = ()=>axiosInstance(getToken()).get("/client/notifications").then((res)=>res.data)


//function to use notifications
export const useNotifications = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_NOTIFICATIONS_KEY,
        queryFn: async () => await getNotifications(),
        placeholderData: { info : {} , results: []},
        onSuccess: (data) => {
            console.log(data)
        },
        staleTime: Infinity,
        cacheTime: Infinity

    }
)
