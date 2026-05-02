import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'
import { APP_COLORS } from '../../themes/appColors'
import { vs, s, ms } from "react-native-size-matters"
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import { AppTextInputProps } from '../../types/appTextinput'


const AppTextInput: React.FC<AppTextInputProps> = ({
    label,
    placeholder,
    error,
    containerStyle,
    style,
    disabled,
    secureTextEntry,
    value,
    onChangeText,
    ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <AppText
                size='sm'
                weight="medium"
                color={error ? APP_COLORS.danger : "textSecondary"}
                style={[
                    styles.label,
                    {
                        color: disabled ? APP_COLORS.gray : error ? APP_COLORS.danger : APP_COLORS.textSecondary
                    }
                ]}
            >{label}</AppText>
            <TextInput
                style={[
                    styles.input,
                    {
                        borderColor: error ? APP_COLORS.danger : APP_COLORS.border,
                        backgroundColor: disabled ? APP_COLORS.background : APP_COLORS.card,
                        color: disabled ? APP_COLORS.gray : APP_COLORS.text,
                        opacity: disabled ? 0.6 : 1
                    },
                    style,
                ]}
                value={value}
                onChangeText={onChangeText}
                editable={!disabled}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={APP_COLORS.placeholder}
                {...props}
            />

            {error && (
                <AppText size='xs' color='danger' style={[
                    styles.errorText,
                    {
                        color: disabled ? APP_COLORS.gray : error ? APP_COLORS.danger : APP_COLORS.textSecondary
                    }
                ]}>
                    {error}
                </AppText>
            )}

        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        marginBottom: vs(6)
    },
    label: {
        marginBottom: vs(4),
        marginLeft: s(4)
    },
    input: {
        borderWidth: 1,
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        backgroundColor: APP_COLORS.card,
        color: APP_COLORS.text,
        paddingVertical: vs(10),
        paddingHorizontal: s(12)
    },
    errorText: {
        marginTop: vs(4),
        marginLeft: s(4)
    }

})