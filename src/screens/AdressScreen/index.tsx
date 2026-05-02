import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { s, vs } from "react-native-size-matters";
import { APP_COLORS } from "../../themes/appColors";
import AppButton from "../../components/AppButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppTextInputController from "../../components/AppTextInputController/AppTextInputController";
import { addAddress, getUserAddresses } from "../../config/dataServices";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Toast } from "toastify-react-native";
import { AddressData } from "../../types/appProductData";

const schema = yup
    .object({
        addressTitle: yup.string().required("Adres başlığı zorunludur"),
        addressCity: yup.string().required("İl İlçe zorunludur"),
        addressDetails: yup
            .string()
            .required("Adres detay zorunludur")
            .min(10, "En az 10 karakter olmalı"),
    })
    .required();

const AddressScreen = () => {
    const user = useSelector((state: RootState) => state.userSlice.user)
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    type FormData = yup.InferType<typeof schema>

    const saveAddress = async (formData: FormData) => {
        try {
            await addAddress(formData, user.uid)
            Toast.success("Adres eklendi")
        } catch (error) {
            Toast.error("Adres kaydedilemedi...")
        }

    };

    const [address, setAddress] = useState<AddressData[]>()

    const loadAddresses = async () => {
        const data = await getUserAddresses(user.uid)
        setAddress(data)
    }
    useEffect(() => {
        loadAddresses()
    }, [])


    return (
        <View style={styles.container}>
            <AppTextInputController
                control={control}
                name={"addressTitle"}
                label={"Adres Başlığı"}
                placeholder={"Ev, İş, Okul"}
            />
            <AppTextInputController
                control={control}
                name={"addressCity"}
                label={"İl/İlçe"}
                placeholder={"İzmir/Konak"}
            />
            <AppTextInputController
                control={control}
                name={"addressDetails"}
                label={"Adres Detay"}
                placeholder={"Orası sokak, burası cadde, no 15"}
            />
            <AppButton
                title="Yeni Adres Ekle"
                size="md"
                onPress={handleSubmit(saveAddress)}
            />

            <FlatList
                data={address}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ marginTop: vs(20) }}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: "#fff",
                            padding: s(12),
                            borderRadius: s(10),
                            marginBottom: s(10),
                            borderWidth: 1,
                            borderColor: APP_COLORS.border,
                        }}
                    >
                        <Text style={{ fontWeight: "bold" }}>{item.addressTitle}</Text>
                        <Text>{item.addressCity}</Text>
                        <Text>{item.addressDetails}</Text>
                        <Text style={{ opacity: 0.5, fontSize: 11, marginTop: 4 }}>
                            {item.createdAt}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};





export default AddressScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: vs(14),
        backgroundColor: APP_COLORS.background,
        flex: 1,
        paddingTop: vs(20),
    },
});
