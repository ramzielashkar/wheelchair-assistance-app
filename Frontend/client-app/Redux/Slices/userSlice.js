import { createSlice } from '@reduxjs/toolkit'

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
        },
        updateLocation:(state, action)=>{
            console.log("location: ", action.payload.location)
            state.user.location = action.payload.location
        }
    }
})

export const {updateUser, deleteUser, updateLocation} = userSlice.actions
export default userSlice.reducer