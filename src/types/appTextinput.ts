import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export interface AppTextInputProps extends TextInputProps {
    label?: string,
    placeholder?: string,
    error?: string,
    containerStyle?: StyleProp<ViewStyle>
    disabled?: boolean,
    secureTextEntry?: boolean,
    style?: ViewStyle | ViewStyle[],
    value: string,
    onChangeText: (text: string) => void,

}