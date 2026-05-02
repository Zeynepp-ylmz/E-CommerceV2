import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { APP_COLORS } from '../../themes/appColors'
import { Product } from '../../types/appProduct'
import AppText from '../../components/AppText'
import Ionicons from '@expo/vector-icons/Ionicons';
import { s, vs } from 'react-native-size-matters'
import AppButton from '../../components/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, deleteFromCart, removeItemFromCart } from '../../store/Reducers/cartSlice'
import { deleteAlert } from '../../components/alert/deleteAlert'
import { RootState } from '../../store/store'
import { useTranslation } from 'react-i18next'

type CartItem = Product

interface CartItemProp {
    products: CartItem[]
}

const CartItem: React.FC<CartItemProp> = ({ products }) => {
    const { t } = useTranslation()
    const productInCart = useSelector((state: RootState) => state.cartSlice.items)
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootState) => state.cartSlice)
    const totalPrice = items.reduce((acc, item) => acc + item.sum, 0)
    const cargoPrice = 60

    const renderItem = ({ item }: { item: CartItem }) => {
        return (
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.details}>
                    <AppText weight="medium">{item.title}</AppText>
                    <AppText size="sm" color={APP_COLORS.textSecondary}>
                        {item.brand}
                    </AppText>

                    <View style={styles.infoRow}>
                        <View style={styles.quantityControl}>
                            <TouchableOpacity style={styles.quantityButton} onPress={() => {
                                if (productInCart.find(() => item)?.quantity === 1) {
                                    deleteAlert(item, dispatch)
                                } else {
                                    dispatch(removeItemFromCart(item))
                                }
                            }}>
                                <Ionicons
                                    name="remove-outline"
                                    size={s(16)}
                                    color={APP_COLORS.primary}
                                />
                            </TouchableOpacity>
                            <AppText>{item.quantity}</AppText>
                            <TouchableOpacity style={styles.quantityButton} onPress={() => dispatch(addItemToCart(item))}>
                                <Ionicons
                                    name="add-outline"
                                    size={s(16)}
                                    color={APP_COLORS.primary}
                                />
                            </TouchableOpacity>
                        </View>

                        <AppText size="lg" weight="bold" color={APP_COLORS.primary}>
                            ₺{item.sum}
                        </AppText>
                    </View>
                </View>

                <TouchableOpacity style={styles.removeButton} onPress={() => deleteAlert(item, dispatch)}>
                    <Ionicons
                        name="trash-outline"
                        size={s(18)}
                        color={APP_COLORS.textSecondary}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    const SummaryRow = ({ label, value }: { label: string, value: string | number }) => {
        return (
            <View style={styles.summaryRow}>
                <AppText color={APP_COLORS.textSecondary}>{label}</AppText>
                <AppText weight='bold'>₺{value}</AppText>
            </View>
        )
    }

    return (
        <View style={{ gap: 10 }}>
            <AppText size='xl' weight='bold'>{t('cart')}({products.length})</AppText>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListFooterComponent={
                    <View style={styles.allsummary}>
                        <SummaryRow label={t('cartTotal')} value={totalPrice} />
                        <SummaryRow label={t('cartTotal2')} value={cargoPrice} />
                        <SummaryRow label={t('cartTotal3')} value={totalPrice + cargoPrice} />
                        <AppButton title={t('cartTotal4')} style={{ width: s(250) }} />
                        <TouchableOpacity>
                            <AppText align='center' color={APP_COLORS.primary}>{t('cartTotal5')}</AppText>
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    );
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: APP_COLORS.card,
        borderRadius: s(12),
        borderWidth: 1,
        borderColor: APP_COLORS.border,
        padding: s(12),
        alignItems: "center",
        gap: s(12),
    },
    image: {
        width: s(74),
        height: s(74),
        borderRadius: s(12),
        resizeMode: "cover",
    },
    details: {
        flex: 1,
        gap: vs(4),
        minWidth: 0,

    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    quantityControl: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(10),
        backgroundColor: APP_COLORS.gray,
        borderRadius: s(20),
        paddingHorizontal: s(8),
        paddingVertical: vs(2),
    },
    quantityButton: {
        width: s(24),
        height: s(24),
        backgroundColor: APP_COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: s(14),
        borderWidth: 1,
        borderColor: APP_COLORS.border,
    },
    removeButton: {
        paddingLeft: s(14),
    },
    listContent: {
        paddingBottom: vs(40),
    },
    separator: {
        height: vs(10),
    },
    allsummary: {
        borderWidth: 1,
        borderRadius: s(12),
        marginVertical: vs(20),
        paddingVertical: vs(10),
        gap: vs(8),
        backgroundColor: APP_COLORS.shadow
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: s(30),

    }
})