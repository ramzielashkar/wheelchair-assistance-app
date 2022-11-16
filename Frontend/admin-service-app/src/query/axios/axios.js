import axios from "axios";
import { baseUrl } from "../../configurations/configurations";

export default(token)=>{
    return axios.create(
        {
            baseURL: baseUrl,
            headers:{
                'Authorization':  `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers': "*",
                'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
                'Access-Control-Allow-Credentials': true
            }
        }
    )
}