import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { APP_COLORS } from '../../themes/appColors'
import { vs } from 'react-native-size-matters'

const Terms = () => {
    return (
        <View style={styles.container}>
            <AppText size='xs' color={APP_COLORS.textSecondary} align='center' >
                Kayıt olarak {" "}
                <AppText size='xs' color={APP_COLORS.primary}> Kullanım Koşulları</AppText>{" "}
                ve {" "}
                <AppText size='xs' color={APP_COLORS.primary}>Gizlilik Politikası</AppText>
                'nı kabul etmiş oluyorsunuz.
            </AppText>
        </View >
    )
}

export default Terms

const styles = StyleSheet.create({
    container: {
        marginTop: vs(10)
    }
})