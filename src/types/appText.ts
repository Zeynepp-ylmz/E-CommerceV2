import { TextStyle } from "react-native"
import { APP_COLORS } from "../themes/appColors";
import { APP_TYPOGRAPHY } from "../themes/appTypography";


export interface AppTextProps {
    children: React.ReactNode;
    color?: keyof typeof APP_COLORS | string;
    size?: keyof (typeof APP_TYPOGRAPHY)["sizes"];
    weight?: keyof (typeof APP_TYPOGRAPHY)["weights"];
    variant?: keyof (typeof APP_TYPOGRAPHY)["variants"];
    align?: TextStyle["textAlign"];
    numberOfLines?: number;
    style?: TextStyle | TextStyle[];
    onPress?: () => void
}