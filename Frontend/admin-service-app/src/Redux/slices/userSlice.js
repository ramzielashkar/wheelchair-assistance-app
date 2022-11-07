import { createSlice } from '@reduxjs/toolkit'

export const user = {
    id:0,
    profile_picture:'',
    name:'',
    active: false,
    followers:[],
    picture:[],
    email:'',
    description:'',
    location:'',
    geo_location :{},
    usertype:"",
}
const initialState = {
    user:null,
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
        }
    }
})

export const {updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer