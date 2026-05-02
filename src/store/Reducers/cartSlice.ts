import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/appProduct";
import { ActionSheetIOS } from "react-native";
import { deleteAlert } from "../../components/alert/deleteAlert";


interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addItemToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id)

            if (existingItem) {
                existingItem.sum += action.payload.price
                existingItem.quantity += 1
            } else {
                state.items.push({
                    ...action.payload,
                    sum: action.payload.price
                })
            }
        },

        removeItemFromCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id)
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.sum -= action.payload.price
                    existingItem.quantity -= 1
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload.id)
                }
            }
        },

        deleteFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },


    }
})

export const { addItemToCart, removeItemFromCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer