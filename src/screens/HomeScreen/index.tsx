import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeHeader from './HomeHeader'
import AppSafeView from '../../components/AppSafeView'
import { APP_COLORS } from '../../themes/appColors'
import Search from './Search'
import ProductContainer from '../../components/Products/ProductContainer'



const HomeScreen = () => {

    return (
        <AppSafeView fullScreen backgroundColor={APP_COLORS.background}>
            <HomeHeader />
            <Search />
            <ProductContainer />
        </AppSafeView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({

})