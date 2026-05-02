import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import { APP_COLORS } from "../../themes/appColors";
import { s, vs } from "react-native-size-matters";

const SummaryStat = ({ label, value }: { label: string; value: string }) => {
    return (
        <View style={styles.summaryCard}>
            <AppText size="xl" weight="bold" align="center">
                {value}
            </AppText>
            <AppText size="sm" color={APP_COLORS.textSecondary} align="center">
                {label}
            </AppText>
        </View>
    );
};

export default SummaryStat;

const styles = StyleSheet.create({
    summaryCard: {
        flex: 1,
        backgroundColor: APP_COLORS.card,
        borderRadius: s(12),
        padding: s(16),

        borderWidth: 1,
        borderColor: APP_COLORS.border,
        marginTop: vs(10),
    },
});
