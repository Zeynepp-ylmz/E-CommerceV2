import { TouchableOpacityProps } from "react-native";



export interface AppButtonProps extends TouchableOpacityProps {
    title: string,
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    loading?: boolean;
    icon?: "google" | "apple";
}