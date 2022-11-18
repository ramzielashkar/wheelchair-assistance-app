
import { store } from "../Redux/store";

 export const getLongitude = ()=>{
    let longitude;
    if(store.getState().user!= null){
        longitude = store.getState().user.geo_location.longitude
        return longitude
    }
    
    return longitude;
}


