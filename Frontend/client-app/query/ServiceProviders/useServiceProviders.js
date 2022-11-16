import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import axiosInstance from '../axios/index'
import { getToken } from "../getToken";

export const ALL_HOSPITALS = ["ALL_HOSPITALS"]
export const ALL_RESTAURANTS = ["ALL_RESTAURANTS"]
export const ALL_VENDORS = ["ALL_VENDORS"]

export const buildHospitalByIdKey = (id) => ["HOSPITAL_BY_ID:" , id]
export const buildRestauarntByIdKey = (id) => ["RESTAURANT_BY_ID:" , id]
export const buildVendorByIdKey = (id) => ["VENDOR_BY_ID:" , id]

//function to get hospitals
export const getHospitals = (lat, lng)=>axiosInstance(getToken()).get(`/client/services/Hospital/${lat}/${lng}`).then((res)=>res.data)

//function to get Restaurants
export const getRestaurants = (lat, lng)=>axiosInstance(getToken()).get(`/client/services/Restaurant/${lat}/${lng}`).then((res)=>res.data)

//function to get Vendors
export const getVendors = (lat, lng)=>axiosInstance(getToken()).get(`/client/services/Vendor/${lat}/${lng}`).then((res)=>res.data)


//function to use hospitals
export const useHospitals = (lat, lng) => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_HOSPITALS,
        queryFn: async () => await getHospitals(lat, lng),
        onSuccess: (data) => {
           data.user.map((seller) => {
                queryClient.setQueryData(buildHospitalByIdKey(seller.id), {...seller})
            })
            queryClient.setQueryData(ALL_HOSPITALS, data)
        },
        
    }
)

//function to use restaurants
export const useRestaurants = (lat, lng) => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_RESTAURANTS,
        queryFn: async () => await getRestaurants(lat, lng),
        onSuccess: (data) => {
          data.user.map((seller) => {
                queryClient.setQueryData(buildRestauarntByIdKey(seller.id), {...seller})
            })
            queryClient.setQueryData(ALL_RESTAURANTS, data)

        },
        onError:(e)=>{
            console.log(e.response)
        }
        
    }
)

//function to use vendors
export const useVendors = (lat, lng) => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_VENDORS,
        queryFn: async () => await getVendors(lat, lng),
        onSuccess: (data) => {
            data.user.map((seller) => {
                queryClient.setQueryData(buildVendorByIdKey(seller.id), {...seller})
            })
            queryClient.setQueryData(ALL_VENDORS, data)

        },
        
    }
)
