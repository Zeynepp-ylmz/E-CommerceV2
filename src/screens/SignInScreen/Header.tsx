import { StyleSheet, Text, View } from 'react-native'
import React, { ComponentProps } from 'react'
import { APP_COLORS } from '../../themes/appColors'
import AppText from '../../components/AppText'
import Ionicons from '@expo/vector-icons/Ionicons';
import { s, vs } from 'react-native-size-matters'



interface HeaderProps {
    title: string;
    subtitle?: string;
    iconName?: ComponentProps<typeof Ionicons>['name']
}

const Header = ({ title, subtitle, iconName }: HeaderProps) => {

    return (
        <View style={styles.header}>
            <View style={styles.iconContainer}>
                <Ionicons name={iconName} size={s(60)} color={APP_COLORS.primary} />
            </View>
            <AppText size='xxl' weight='bold' style={styles.title} color={APP_COLORS.secondary}>
                {title}
            </AppText>
            <AppText size='sm' weight='regular' color={APP_COLORS.textSecondary} style={styles.subtitle}>
                {subtitle}
            </AppText>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
    },
    title: {
        marginTop: vs(5),

    },
    subtitle: {
        marginTop: vs(5),
    },
    iconContainer: {
        width: s(100),
        height: s(100),
        borderRadius: s(1000),
        backgroundColor: APP_COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    }
})