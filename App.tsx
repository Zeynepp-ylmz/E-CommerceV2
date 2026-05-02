
import { StyleSheet, Text, View } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native'
import { NavigationContainer } from "@react-navigation/native"
import AuthStack from './src/navigation/AuthStack'
import MainAppStack from './src/navigation/MainAppStack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/localization/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';

export default function App() {
  const loadLanguage = async () => {
    const savedLang = await AsyncStorage.getItem("appLanguages")
    if (savedLang) { i18n.changeLanguage(savedLang) }
  }

  useEffect(() => {
    loadLanguage()
  }, [])


  return (

    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <ToastManager />
            <MainAppStack />
          </NavigationContainer>
        </I18nextProvider>
      </Provider>

    </>



  );
}
