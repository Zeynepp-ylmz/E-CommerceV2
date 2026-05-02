import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/AppSafeView'
import AppText from '../../components/AppText'
import { APP_COLORS } from '../../themes/appColors'
import { vs } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next'

const EmptyCart = () => {
    const { t } = useTranslation()
    return (
        <AppSafeView fullScreen backgroundColor={APP_COLORS.background} style={styles.container}>
            <Ionicons name="cart-sharp" size={80} color={APP_COLORS.primary} />
            <AppText size='xxl' weight='bold' color={APP_COLORS.secondary}>{t('emptyCart')}</AppText>
            <AppText align='center' size='sm' color={APP_COLORS.secondary} style={{ paddingHorizontal: vs(20) }}>{t('emptyCartText')}</AppText>
        </AppSafeView>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})