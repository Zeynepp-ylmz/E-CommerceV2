import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/AppSafeView'
import { s, vs } from 'react-native-size-matters'
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Divider from '../../components/Divider/Divider';
import Socials from './Socials';
import { useTranslation } from 'react-i18next';


const SignInScreen = () => {
    const { t } = useTranslation();
    return (
        <AppSafeView fullScreen >
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Header title={t('welcome')} subtitle={t('welcomeText')} iconName='storefront' />
                    <Form />
                    <Footer text={t('registerText')} navigated={t('register')} aimScreen='SignUpScreen' />
                    <Divider />
                    <Socials state={t('loginButton')} />
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