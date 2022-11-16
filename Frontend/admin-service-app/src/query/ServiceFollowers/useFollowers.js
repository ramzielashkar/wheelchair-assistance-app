import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import  axiosInstance  from "../axios/axios";
import { getToken } from "../getToken";
export const ALL_FOLLOWERS_KEY = ["ALL_FOLLOWERS_KEY"]
export const buildFollowerByIdKey = (id) => ["FOLLOWER_BY_ID:" , id]


//function to get followers
export const getFollowers = ()=>axiosInstance(getToken()).get("/service/followers").then((res)=>res.data)



//function to use followers
export const useFollowers = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_FOLLOWERS_KEY,
        queryFn: async () => await getFollowers(),
        placeholderData: { info : {} , results: []},
        onSuccess: (data) => {
            data.followers.followers.map((follower) => {
                queryClient.setQueryData(buildFollowerByIdKey(follower.id), {...follower})
            })
        },
        staleTime: Infinity,
    }
)
