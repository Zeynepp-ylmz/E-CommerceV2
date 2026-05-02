import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import { APP_COLORS } from "../../themes/appColors";

const SectionHeader = ({
    title,
    actionLabel,
}: {
    title: string;
    actionLabel?: string;
}) => {
    return (
        <View style={styles.sectionHeader}>
            <AppText size="lg" weight="bold">
                {title}
            </AppText>

            {actionLabel && (
                <TouchableOpacity>
                    <AppText weight="medium" size="sm" color={APP_COLORS.primary}>
                        {actionLabel}
                    </AppText>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SectionHeader;

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
