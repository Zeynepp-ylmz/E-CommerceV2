import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";
import { APP_COLORS } from "../../themes/appColors";
import AppText from "../../components/AppText";

const ProfileListRow = ({
    icon,
    label,
}: {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
}) => {
    return (
        <TouchableOpacity style={styles.listRow}>
            <View style={styles.listRowLeft}>
                <View style={styles.listIcon}>
                    <Ionicons name={icon} size={s(18)} color={APP_COLORS.primary} />
                </View>
                <AppText weight="medium">{label}</AppText>
            </View>
            <Ionicons name="chevron-forward" size={s(16)} color={APP_COLORS.gray} />
        </TouchableOpacity>
    );
};

export default ProfileListRow;

const styles = StyleSheet.create({
    listRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: s(16),
        paddingVertical: vs(14),
        borderBottomWidth: 1,
        borderBottomColor: APP_COLORS.border,
    },
    listRowLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(12),
    },
    listIcon: {
        width: s(32),
        height: s(32),
        borderRadius: s(12),
        backgroundColor: APP_COLORS.shadow,
        justifyContent: "center",
        alignItems: "center",
    },
});
