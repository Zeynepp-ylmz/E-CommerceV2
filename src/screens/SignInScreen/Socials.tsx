import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../../components/AppButton'
import { vs } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const Socials = ({ state }: { state: string }) => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <AppButton title={t('continueGoogle', { state: state })} fullWidth variant='secondary' onPress={() => { }} icon='google' />
            <AppButton title={t('continueApple', { state: state })} fullWidth variant='secondary' onPress={() => { }} icon='apple' />


        </View>
    )
}

export default Socials

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: vs(10),
        marginTop: vs(10)
    }
})