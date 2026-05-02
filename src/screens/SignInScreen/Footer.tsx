import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { vs, s } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'
import { useNavigation } from '@react-navigation/native'

const Footer = ({ text, navigated, aimScreen }: { text: string, navigated: string, aimScreen: string }) => {
    const navigate = useNavigation<any>()
    return (
        <View style={styles.container}>
            <AppText size='sm' color={APP_COLORS.textSecondary}>{text}</AppText>
            <AppText color={APP_COLORS.primary} weight='medium' onPress={() => { navigate.navigate(aimScreen) }}>{navigated}</AppText>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vs(20),
        gap: s(5)
    }
})