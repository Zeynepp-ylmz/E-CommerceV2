import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import AppTextInput from "../AppTextInput";
import { AppTextInputControllerProps } from "../../types/appTestInputController";

const AppTextInputController = <T extends FieldValues>({
    control,
    name,
    rules,
    placeholder,
    label,
}: AppTextInputControllerProps<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <AppTextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    label={label}
                    error={error?.message}
                />
            )}
        />
    );
};

export default AppTextInputController;

const styles = StyleSheet.create({});
