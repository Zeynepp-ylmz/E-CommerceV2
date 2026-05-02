import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import { APP_COLORS } from '../../themes/appColors'
import { vs } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'

const Divider = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <View style={styles.dividerLine} />
            <AppText color={APP_COLORS.textSecondary} size='sm' style={styles.dividerText}>
                {t('or')}
            </AppText>
            <View style={styles.dividerLine} />
        </View>
    )
}

export default Divider

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vs(30)
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: APP_COLORS.textSecondary
    },
    dividerText: {
        paddingHorizontal: vs(10),

    }
})