import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/AppSafeView";
import { APP_COLORS } from "../../themes/appColors";
import AppText from "../../components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";
import SummaryStat from "./SummaryStat";
import SectionHeader from "./SectionHeader";
import ProfileAction from "./ProfileAction";
import { PRODUCTS } from "../../components/Constants/products";
import ProfileListRow from "./ProfileListRow";
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
    const { t } = useTranslation()
    const lastOrders = PRODUCTS.slice(0, 2)
    const navigate = useNavigation<any>()
    const user = useSelector((state: RootState) => state.userSlice.user)


    return (
        <AppSafeView fullScreen backgroundColor={APP_COLORS.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View>
                            <AppText size="xl" weight="bold" color={APP_COLORS.secondary}>
                                {t('profiles')}
                            </AppText>

                        </View>
                        <View style={styles.headerRight}>
                            <TouchableOpacity>
                                <Ionicons
                                    name="settings-outline"
                                    size={s(20)}
                                    color={APP_COLORS.text}
                                    onPress={() => navigate.navigate("LanguageScreen")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.profileCard}>
                        <Image
                            source={require("../../../assets/avatar.png")}
                            style={styles.avatar}
                        />
                        <View style={{ flex: 1 }}>
                            <AppText size="lg" weight="bold">
                                Önder Selim
                            </AppText>
                            <AppText size="sm" color={APP_COLORS.textSecondary}>
                                {user?.email}
                            </AppText>
                        </View>
                        <View style={styles.badge}>
                            <Ionicons name="diamond" size={s(14)} color={APP_COLORS.primary} />
                            <AppText size="sm" weight="medium" color="primary">
                                Elite
                            </AppText>
                        </View>


                    </View>

                    <View style={styles.summaryRow}>
                        <SummaryStat label={t('profileCart1')} value="24" />
                        <SummaryStat label={t('profileCart2')} value="12" />
                        <SummaryStat label={t('profileCart3')} value="3" />
                    </View>

                    <View style={styles.section}>
                        <SectionHeader title={t('profileCart4')} actionLabel={t('profileCart16')} />

                        <View style={styles.actionItems}>
                            <ProfileAction
                                label={t('profileCart5')}
                                icon="bag"
                                onPress={() => {
                                    console.log("Siparişlerim");
                                }}
                            />
                            <ProfileAction
                                label={t('profileCart6')}
                                icon="heart"
                                onPress={() => {
                                    console.log("Favorilerim");
                                }}
                            />
                            <ProfileAction
                                label={t('profileCart7')}
                                icon="card"
                                onPress={() => {
                                    console.log("Kartlarım");
                                }}
                            />
                            <ProfileAction
                                label={t('profileCart8')}
                                icon="location"
                                onPress={() =>
                                    navigate.navigate('AddressScreen')
                                }
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <SectionHeader title={t('profileCart9')} actionLabel={t('profileCart16')} />
                        <View style={styles.orderPreviewList}>
                            {lastOrders.map((item) => (
                                <View key={item.id} style={styles.orderPreviewCard}>
                                    <Image source={item.image} style={styles.orderImage} />
                                    <View style={{ flex: 1 }}>
                                        <AppText weight="medium">{item.title}</AppText>
                                        <AppText size="sm" color={APP_COLORS.textSecondary}>
                                            {item.brand}
                                        </AppText>
                                    </View>
                                    <AppText weight="bold" color={APP_COLORS.primary}>
                                        {item.price}
                                    </AppText>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>


                <View style={styles.section}>
                    <SectionHeader title={t('profileCart10')} />

                    <View style={styles.listCard}>
                        <ProfileListRow icon="person" label={t('profileCart11')} />
                        <ProfileListRow icon="notifications" label={t('profileCart12')} />
                        <ProfileListRow icon="shield-checkmark" label={t('profileCart13')} />
                        <ProfileListRow icon="help-circle" label={t('profileCart14')} />
                    </View>
                </View>

                <AppButton
                    title={t('profileCart15')}
                    fullWidth
                    style={{
                        marginTop: vs(10),
                        marginBottom: vs(20),
                        backgroundColor: APP_COLORS.danger,
                    }}
                    onPress={() => navigate.navigate('AuthStack', { screen: 'SignInScreen' })}
                />


            </ScrollView>

        </AppSafeView >
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: vs(5),
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(10),
        height: s(42),
    },
    profileCard: {
        flexDirection: "row",
        backgroundColor: APP_COLORS.card,
        borderWidth: 1,
        borderColor: APP_COLORS.border,
        padding: s(16),
        borderRadius: s(16),
        alignItems: "center",
        gap: s(16),
    },
    avatar: {
        width: s(64),
        height: s(64),
        borderRadius: 99,
        marginBottom: vs(10)
    },
    badge: {
        backgroundColor: APP_COLORS.shadow,
        paddingHorizontal: s(12),
        paddingVertical: vs(6),
        borderRadius: s(12),
        flexDirection: "row",
        alignItems: "center",
        gap: s(6),
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vs(10),
        gap: s(10),
    },
    section: {
        gap: vs(10),
        marginTop: vs(10)
    },
    actionItems: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: s(12),
    },
    orderPreviewList: {
        gap: vs(10),
    },
    orderPreviewCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: APP_COLORS.card,
        borderRadius: s(12),
        gap: s(12),
        padding: s(12),
        borderWidth: 1,
        borderColor: APP_COLORS.border,
    },
    orderImage: {
        width: s(54),
        height: s(54),
        borderRadius: s(12),
        resizeMode: "cover",
    },
    listCard: {
        backgroundColor: APP_COLORS.card,
        borderRadius: s(12),
        borderWidth: 1,
        borderColor: APP_COLORS.border,
    },
});
