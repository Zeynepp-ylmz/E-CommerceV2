import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack'
import BottomTab from './BottomTab'
import AddressScreen from '../screens/AdressScreen'
import LanguageScreen from '../screens/LanguageScreen'
import { useTranslation } from 'react-i18next'



const Stack = createStackNavigator()

const MainAppStack = () => {
    const { t } = useTranslation()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='AuthStack' component={AuthStack} />
            <Stack.Screen name='BottomTab' component={BottomTab} />
            <Stack.Screen name='AddressScreen' component={AddressScreen} options={{ headerShown: true, title: "Adreslerim" }} />
            <Stack.Screen name='LanguageScreen' component={LanguageScreen} options={{ headerShown: true, title: t('headerLanguage') }} />
        </Stack.Navigator>
    )
}

export default MainAppStack

const styles = StyleSheet.create({})
