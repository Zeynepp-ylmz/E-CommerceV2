import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../Constants/products'
import Ionicons from '@expo/vector-icons/Ionicons';
import { APP_COLORS } from '../../themes/appColors';
import { APP_TYPOGRAPHY } from '../../themes/appTypography';
import { s, vs } from 'react-native-size-matters';
import AppText from '../AppText';
import { ProductCardProp } from '../../types/appProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ProductCard: React.FC<ProductCardProp> = ({ product, isFavorite = false, onPressCart }) => {
    const favorited = useSelector((state: RootState) => state.favoriteSlice.favorited)
    isFavorite = favorited.includes(product.id)
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <TouchableOpacity style={styles.favoriteButton}>
                    {
                        isFavorite ? (
                            <Ionicons name="heart" size={24} color={APP_COLORS.primary} />
                        ) : (
                            <Ionicons name="heart-outline" size={24} color={APP_COLORS.primary} />
                        )
                    }

                </TouchableOpacity>

                <TouchableOpacity style={styles.cartButton} onPress={onPressCart}>
                    {
                        <Ionicons name="cart-outline" size={24} color={APP_COLORS.secondary} />
                    }

                </TouchableOpacity>

            </View>
            <View style={styles.information}>
                <AppText size='xs' color={APP_COLORS.textSecondary}>
                    {product.brand}
                </AppText>
                <AppText size='md' weight='bold' color={APP_COLORS.secondary}>
                    {product.title}
                </AppText>
                <View style={styles.priceRow}>
                    <AppText size='xl' weight='bold' color={APP_COLORS.primary}>
                        {product.price}
                    </AppText>
                    <AppText size='md' color={APP_COLORS.textSecondary} style={{ textDecorationLine: 'line-through' }}>
                        {product.oldPrice}
                    </AppText>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        backgroundColor: APP_COLORS.card,
        gap: vs(12)
    },
    imageWrapper: {
        width: "100%",
        height: vs(200),
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        overflow: 'hidden'
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
    },
    favoriteButton: {
        position: 'absolute',
        top: s(10),
        right: s(10),
        width: s(32),
        height: s(32),
        backgroundColor: APP_COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
    },
    cartButton: {
        position: 'absolute',
        top: s(10),
        right: s(10),
        width: s(32),
        height: s(32),
        backgroundColor: APP_COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        marginTop: vs(30),

    },
    information: {
        gap: vs(10),
        paddingBottom: 20
    },
    priceRow: {
        flexDirection: 'row',
        gap: vs(10),
        alignItems: 'baseline'
    }
})