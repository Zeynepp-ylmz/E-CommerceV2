import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import { AppTextProps } from '../../types/appText'
import { APP_COLORS } from '../../themes/appColors'



const AppText: React.FC<AppTextProps> = ({
    children,
    color = "131313",
    size = "md",
    weight = "regular",
    align = "left",
    variant = "normalText",
    numberOfLines,
    onPress,
    style,
    ...props
}) => {

    const variantStyle = variant ? APP_TYPOGRAPHY.variants[variant] : {}

    const computedColor = (
        color && (APP_COLORS[color as keyof typeof APP_COLORS] ?? color)
    ) || APP_COLORS.text

    const computedStyle = {
        fontSize: APP_TYPOGRAPHY.sizes[size],
        fontWeight: APP_TYPOGRAPHY.weights[weight],
        color: computedColor,
        textAlign: align
    }

    return (
        <Text
            style={[variantStyle, style, computedStyle]} onPress={onPress}
        >{children}</Text>

    )
}

export default AppText

const styles = StyleSheet.create({})