import { ViewStyle } from "react-native"




export interface AppSafeViewProps {
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
    padding?: number;
    fullScreen?: boolean;
    backgroundColor?: string;
}