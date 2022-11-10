import { useQuery} from "@tanstack/react-query";
import { queryClient } from "../../App";
import axiosInstance from '../axios/index'
import { getLatitude } from "../getLatitude";
import { getLongitude } from "../getLongitude";
import { getToken } from "../getToken";

export const ALL_HOSPITALS = ["ALL_HOSPITALS"]
export const ALL_RESTAURANTS = ["ALL_RESTAURANTS"]
export const ALL_VENDORS = ["ALL_VENDORS"]

export const buildHospitalByIdKey = (id) => ["HOSPITAL_BY_ID:" , id]
export const buildRestauarntByIdKey = (id) => ["RESTAURANT_BY_ID:" , id]
export const buildVendorByIdKey = (id) => ["VENDOR_BY_ID:" , id]

//function to get hospitals
export const getHospitals = ()=>axiosInstance(getToken()).get(`/client/services/Hospital/${getLatitude()}/${getLongitude()}`).then((res)=>res.data)

//function to get Restaurants
export const getRestaurants = ()=>axiosInstance(getToken()).get(`/client/services/Restaurant/${getLatitude()}/${getLongitude()}`).then((res)=>res.data)

//function to get Vendors
export const getVendors = ()=>axiosInstance(getToken()).get(`/client/services/Vendor/${getLatitude()}/${getLongitude()}`).then((res)=>res.data)


//function to use hospitals
export const useHospitals = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_HOSPITALS,
        queryFn: async () => await getHospitals(),
        onSuccess: (data) => {
            data.sellers.map((seller) => {
                queryClient.setQueryData(buildHospitalByIdKey(seller.id), {...seller})
            })
        },
        staleTime: Infinity,
        
    }
)

//function to use restaurants
export const useRestaurants = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_RESTAURANTS,
        queryFn: async () => await getRestaurants(),
        onSuccess: (data) => {
            data.sellers.map((seller) => {
                queryClient.setQueryData(buildRestauarntByIdKey(seller.id), {...seller})
            })
        },
        staleTime: Infinity,
        
    }
)

//function to use vendors
export const useVendors = () => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_VENDORS,
        queryFn: async () => await getVendors(),
        onSuccess: (data) => {
            data.sellers.map((seller) => {
                queryClient.setQueryData(buildVendorByIdKey(seller.id), {...seller})
            })
        },
        staleTime: Infinity,
        
    }
)