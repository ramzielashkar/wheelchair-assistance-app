import { store } from "../Redux/store";

 export const getLatitude = ()=>{
    let latitude;
    if(store.getState().user!= null){
        latitude = store.getState().user.geo_location.latitude
        return latitude
    }
    
    return latitude;
}


