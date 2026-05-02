import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './Reducers/cartSlice'
import { favoriteSlice } from './Reducers/favoriteSlice';
import { userSlice } from './Reducers/userSlice';


export const store = configureStore({
    reducer: {
        cartSlice: cartSlice.reducer,
        favoriteSlice: favoriteSlice.reducer,
        userSlice: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>