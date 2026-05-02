import { createSlice } from "@reduxjs/toolkit";


const initialState: any = {
    user: null
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = null
        }
    }
})

export default userSlice.reducer
export const { setUser, logoutUser } = userSlice.actions