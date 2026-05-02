import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { APP_COLORS } from '../../themes/appColors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { s, vs } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next';

const HomeHeader = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <View>
                <AppText size='sm' color={APP_COLORS.textSecondary} style={{ marginBottom: vs(7), }}>{t('welcome')}</AppText>
                <AppText size='xl' weight='medium' color={APP_COLORS.secondary}>{t('headerSubtitle')}</AppText>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={30} color="black" />
                </TouchableOpacity>
                <Image style={styles.avatar}
                    source={require("../../../assets/avatar.png")}

                />
            </View>

        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vs(10)
    },
    avatar: {
        width: s(60),
        height: s(60),
        borderRadius: 999
    },
})