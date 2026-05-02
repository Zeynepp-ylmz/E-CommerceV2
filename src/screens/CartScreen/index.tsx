import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/AppSafeView'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const CartScreen = () => {
    const { items } = useSelector((state: RootState) => state.cartSlice)
    const hasItem = items.length > 0

    return (
        <AppSafeView fullScreen>
            {
                hasItem ? <CartItem products={items} /> : <EmptyCart />
            }
        </AppSafeView>
    )
}

export default CartScreen

const styles = StyleSheet.create({})