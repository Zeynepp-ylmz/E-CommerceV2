import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useState, } from 'react'
import AppTextInput from '../../components/AppTextInput'
import AppText from '../../components/AppText'
import AppButton from '../../components/AppButton'
import { vs, s } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { Toast } from 'toastify-react-native'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/Reducers/userSlice'
import { useTranslation } from 'react-i18next'

const Form = () => {

    const { t } = useTranslation()
    const navigate = useNavigation<any>()
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleSignIn = async () => {
        console.log(formData)
        setLoading(true)
        try {
            const userCredational = await signInWithEmailAndPassword(auth, formData.email, formData.password)
            setformData({ email: "", password: "" });

            dispatch(setUser({
                uid: userCredational.user.uid,
                email: userCredational.user.email
            }))

            navigate.navigate("BottomTab")
        } catch (error) {
            Toast.error("Hesap Bulunamadı")
        } finally {
            setLoading(false)
        }
    }



    return (

        <View style={styles.form}>
            <AppTextInput
                label={t('inputMailLabel')}
                placeholder={t('inputMailPlaceholder')}
                value={formData.email}
                onChangeText={(text) => { setformData({ ...formData, email: text }) }}
                keyboardType="email-address"
                autoComplete='email'
                autoCapitalize='none'
            />
            <AppTextInput
                label={t('inputPasswordLabel')}
                placeholder='*********'
                value={formData.password}
                onChangeText={(text) => { setformData({ ...formData, password: text }) }}
                secureTextEntry
                autoComplete='password'
                autoCapitalize='none'
            />
            <AppText align='right' size='sm' color='primary' onPress={() => { }} style={styles.forgotPassword}>
                {t('forgetPassword')}
            </AppText>
            {
                loading ? (
                    <ActivityIndicator />
                ) : (
                    <AppButton title={t('loginButton')} variant='primary' size='md' fullWidth onPress={handleSignIn} style={styles.signInButton} />
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
    forgotPassword: {
        marginTop: vs(10),
        marginBottom: vs(20)
    },
    signInButton: {
        marginBottom: vs(5)
    }
})