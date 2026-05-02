import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../../components/AppTextInput'
import AppText from '../../components/AppText'
import AppButton from '../../components/AppButton'
import { vs, s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { Toast } from 'toastify-react-native'

const Form = () => {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })
    const navigate = useNavigation<any>()
    const [loading, setLoading] = useState(false)

    const handleSignIn = async () => {
        console.log(formData)

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )
            setLoading(true)
            Toast.success("Kaydınız oluşturuldu...")
            setformData({ name: "", email: "", password: "", passwordConfirm: "" })
            navigate.navigate("SignInScreen")
        } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
                Toast.error("Zaten Kayıtlı")
            } if (error.code === "auth/invalid-email") {
                Toast.error("Geçersiz e-posta")
            }
            console.log("error:", error)
            setformData({ name: "", email: "", password: "", passwordConfirm: "" })
        } finally {
            setLoading(false)
        }

    }

    return (
        <View style={styles.form}>
            <AppTextInput
                label='Ad Soyad'
                value={formData.name}
                onChangeText={(text) => { setformData({ ...formData, name: text }) }}
                autoComplete='name'
                autoCapitalize='words'
            />
            <AppTextInput
                label='E-posta'
                placeholder='örnek@email.com'
                value={formData.email}
                onChangeText={(text) => { setformData({ ...formData, email: text }) }}
                keyboardType="email-address"
                autoComplete='email'
                autoCapitalize='none'
            />
            <AppTextInput
                label='Şifre'
                placeholder='*********'
                value={formData.password}
                onChangeText={(text) => { setformData({ ...formData, password: text }) }}
                secureTextEntry
                autoComplete='password'
                autoCapitalize='none'
            />
            <AppTextInput
                label='Şifre Tekrar'
                placeholder='*********'
                value={formData.passwordConfirm}
                onChangeText={(text) => { setformData({ ...formData, passwordConfirm: text }) }}
                secureTextEntry
                autoComplete='password'
                autoCapitalize='none'
            />
            {
                loading ? (
                    <ActivityIndicator />
                ) : (
                    <AppButton title='Kayıt Ol' variant='primary' size='md' fullWidth onPress={handleSignIn} style={styles.RegisterButton} />
                )
            }

        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    form: {
        marginTop: vs(30)
    },
    RegisterButton: {
        marginTop: vs(10)
    }
})