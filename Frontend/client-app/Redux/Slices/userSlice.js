import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:{},
    token:'',
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        updateUser :(state, action)=>{
            state.user = action.payload.user
        },
        deleteUser:()=>{
            return initialState
        },
        updateLocation:(state, action)=>{
            state.user.geo_location = action.payload.location
        },
        updateFavorites:(state, action)=>{
          state.user.following = action.payload.favorites  
        },
        setToken:(state, action)=>{
            state.token = action.payload.token
        },
        getToken:(state)=>{
            //return state.user.token
        },
        updateAddress:(state, action)=>{
            state.user.location = action.payload.location
        },
        updateName:(state, action)=>{
            state.user.name = action.payload.name
        }
    }
})

export const {updateUser, deleteUser, updateLocation, setToken, updateFavorites, updateAddress, updateName} = userSlice.actions
export default userSlice.reducer