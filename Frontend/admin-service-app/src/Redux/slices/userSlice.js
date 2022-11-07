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
        }
    }
})

export const {updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer