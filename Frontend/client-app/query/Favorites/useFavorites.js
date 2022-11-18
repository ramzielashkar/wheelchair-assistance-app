import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import { updateFavorites, updateUser } from "../../Redux/Slices/userSlice";
import { store } from "../../Redux/store";
import axiosInstance from '../axios/index'
import { getToken } from "../getToken";

export const ALL_FAVORITES = ["ALL_FAVORITES"]

export const buildFavoriteByIdKey = (id) => ["FAVORITE_BY_ID:" , id]

//function to get favorites
export const getFavorites = ()=>axiosInstance(getToken()).get(`/client/followed`).then((res)=>res.data)


//function to use favorites
export const useFavorites = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_FAVORITES,
        queryFn: async () => await getFavorites(),
        onSuccess: (data) => {
            store.dispatch(updateFavorites({
                favorites: data.followed.following
            }))
           data.followed.following.map((seller) => {
                queryClient.setQueryData(buildFavoriteByIdKey(seller.id), {...seller})
            })
        },
        
    }
)