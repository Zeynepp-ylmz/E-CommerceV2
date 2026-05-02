import { s } from "react-native-size-matters";

export const APP_TYPOGRAPHY = {
    sizes: {
        xs: s(10),
        sm: s(12),
        md: s(14),
        lg: s(18),
        xl: s(22),
        xxl: s(30),
    },

    weights: {
        regular: "400",
        medium: "500",
        bold: "700",
    },

    variants: {
        title: {
            fontSize: s(22),
            fontWeight: "700",
        },
        subtitle: {
            fontSize: s(18),
            fontWeight: "500",
        },
        normalText: {
            fontSize: s(14),
            fontWeight: "400",
        },

    }
};