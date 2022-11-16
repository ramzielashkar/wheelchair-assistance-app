import axios from "axios";
import { baseUrl } from "../../configurations/configurations";
const getToken = ()=>{
    const token = localStorage.getItem('token');
    return token;
}
export const axiosInstance = axios.create(
    {
        baseURL: baseUrl,
        headers:{
            'Authorization': `Bearer ${getToken()}`,
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
            'Access-Control-Allow-Credentials': true
        }
    }
)