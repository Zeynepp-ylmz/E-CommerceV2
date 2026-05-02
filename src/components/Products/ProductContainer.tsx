import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Product } from '../../types/appProduct';
import Filters from '../../screens/HomeScreen/Filters';
import { s, vs } from 'react-native-size-matters';
import { addItemToCart } from '../../store/Reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../config/dataServices';


const ProductContainer = () => {
    const dispatch = useDispatch()
    const [products, setProduct] = useState()

    const getData = async () => {
        const data = await getProductsData()
        setProduct(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <FlatList<Product>
            numColumns={2}
            data={products}
            renderItem={({ item }) => { return <ProductCard product={item} onPressCart={() => { dispatch(addItemToCart(item)) }} /> }}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            ListHeaderComponent={<Filters />}
            columnWrapperStyle={styles.wrapper}
        />
    )
}

export default ProductContainer

const styles = StyleSheet.create({
    wrapper: {
        gap: s(10),
        paddingBottom: 10
    }
})