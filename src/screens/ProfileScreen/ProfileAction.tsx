import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";
import { APP_COLORS } from "../../themes/appColors";
import AppText from "../../components/AppText";

const ProfileAction = ({
    label,
    onPress,
    icon,
}: {
    label: string;
    onPress?: () => void;
    icon: keyof typeof Ionicons.glyphMap;
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.actionCard}>
            <View style={styles.actionIcon}>
                <Ionicons name={icon} size={s(20)} color={APP_COLORS.primary} />
            </View>
            <AppText size="sm" weight="medium">
                {label}
            </AppText>
        </TouchableOpacity>
    );
};

export default ProfileAction;

const styles = StyleSheet.create({
    actionCard: {
        backgroundColor: APP_COLORS.card,
        width: "47%",
        borderRadius: s(12),
        padding: s(16),
        gap: vs(8),
        borderWidth: 1,
        borderColor: APP_COLORS.border,
    },
    actionIcon: {
        width: s(42),
        height: s(42),
        borderRadius: s(12),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: APP_COLORS.shadow,
    },
});
