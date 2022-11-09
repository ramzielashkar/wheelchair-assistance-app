import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const token = AsyncStorage.getItem('token');
export const baseUrl = "http://192.168.1.66:8000"
export const axiosInstance = axios.create(
    {
        baseURL: "http://192.168.1.66:8000",
        headers:{
            'Authorization': `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
            'Access-Control-Allow-Credentials': true
        }
    }
)