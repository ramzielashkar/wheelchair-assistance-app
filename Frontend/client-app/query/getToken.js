import { store } from "../Redux/store";

 export const getToken = ()=>{
    let token;
    if(store.getState().user!= null){
        token = store.getState().token
        return token
    }
    
    return token;
}


