import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { APP_COLORS } from '../../themes/appColors'
import { vs, s } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import AppText from '../AppText'
import { AppButtonProps } from '../../types/appButton'
import Ionicons from '@expo/vector-icons/Ionicons';

const AppButton: React.FC<AppButtonProps> = ({
    title,
    onPress,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    disabled = false,
    style,
    icon,
    ...props
}) => {

    const variantStyle = variantStyles[variant]
    const sizeStyle = sizeStyles[size]
    const icons: Record<"google" | "apple", React.ReactNode> = {
        google: <Ionicons name="logo-google" size={24} color='white' />,
        apple: <Ionicons name="logo-apple" size={24} color='white' />
    }

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={
            [
                styles.base,
                variantStyle,
                sizeStyle,
                fullWidth ? { width: "100%" } : { alignSelf: 'center' },
                style,
            ]}
            {...props}
        >
            {
                loading ? (
                    <ActivityIndicator color={"white"} />
                ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: vs(10) }}>
                        {icon && icons[icon]}

                        <AppText
                            weight='medium'
                            color={variant === "outline" || variant === "ghost" ? "primary" : "white"}
                        >
                            {title}
                        </AppText>
                    </View>
                )
            }

        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    base: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: APP_TYPOGRAPHY.sizes.sm
    }

})

const variantStyles = StyleSheet.create({
    primary: {
        backgroundColor: APP_COLORS.primary,
    },
    secondary: {
        backgroundColor: APP_COLORS.secondary,
    },
    outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: APP_COLORS.primary,
    },
    ghost: {
        backgroundColor: "transparent"
    }
})

const sizeStyles = StyleSheet.create({
    sm: {
        paddingVertical: vs(6),
        paddingHorizontal: s(12)
    },
    md: {
        paddingVertical: vs(10),
        paddingHorizontal: s(14)
    },
    lg: {
        paddingVertical: vs(14),
        paddingHorizontal: s(16)
    },
})

