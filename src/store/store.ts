import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/cartSlice'
import { favoriteSlice } from './reducers/favoriteSlice';
import { userSlice } from './reducers/userSlice';


export const store = configureStore({
    reducer: {
        cartSlice: cartSlice.reducer,
        favoriteSlice: favoriteSlice.reducer,
        userSlice: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>