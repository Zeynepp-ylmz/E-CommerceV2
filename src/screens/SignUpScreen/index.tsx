import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/AppSafeView'
import { s, vs } from 'react-native-size-matters'
import Header from '../SignInScreen/Header'
import Form from './Form'
import Footer from '../SignInScreen/Footer'
import Divider from '../../components/Divider/Divider'
import Socials from '../SignInScreen/Socials'
import Terms from './Terms'

const SignInScreen = () => {

    return (
        <AppSafeView fullScreen >
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Header title='Kayıt Ol' subtitle='Hesap oluşturun ve giriş yapın !' iconName='person-add' />
                    <Form />
                    <Footer text='Zaten bir hesabınız var mı?' navigated='Giriş Yap' aimScreen='SignInScreen' />
                    <Divider />
                    <Socials state='kayıt ol' />
                    <Terms />
                </View>
            </ScrollView>
        </AppSafeView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: s(20),
        paddingVertical: vs(20)
    },

})