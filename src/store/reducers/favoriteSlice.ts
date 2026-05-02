import { createSlice } from "@reduxjs/toolkit";
import { removeItemFromCart } from "./cartSlice";


interface FavoriteState {
    favorited: number[]
}

const initialState: FavoriteState = {
    favorited: []
};

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorited: (state, action) => {
            state.favorited.push(action.payload.id)
        }

    }
})

export default favoriteSlice.reducer
export const { addFavorited } = favoriteSlice.actions