import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import  axiosInstance  from "../axios/axios";
import { getToken } from "../getToken";
export const ALL_PICTURES_KEY = ["ALL_PICTURES_KEY"]
export const buildPictureByIdKey = (id) => ["PICTURE_BY_ID:" , id]


//function to get followers
export const getPictures = ()=>axiosInstance(getToken()).get("/service/picture").then((res)=>res.data)



//function to use followers
export const usePictures = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_PICTURES_KEY,
        queryFn: async () => await getPictures(),
        placeholderData: { info : {} , results: []},
        onSuccess: (data) => {
           data.pictures.pictures.map((picture) => {
                queryClient.setQueryData(buildPictureByIdKey(picture.id), {...picture})
            })
        },
        staleTime: Infinity,
    }
)
