import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import AppTextInput from '../../components/AppTextInput';
import { vs } from 'react-native-size-matters';
import { APP_COLORS } from '../../themes/appColors';
import { useTranslation } from 'react-i18next';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const { t } = useTranslation()
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={24} color={APP_COLORS.secondary} style={styles.searchIcon} />
            <AppTextInput value={searchQuery} placeholder={t('search')} containerStyle={styles.containerStyle} onChangeText={(text) => { setSearchQuery(text) }} style={styles.inputContainer} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        position: 'relative',
        marginTop: vs(-5)
    },
    containerStyle: {
    },
    searchIcon: {
        position: 'absolute',
        marginTop: vs(30),
        paddingLeft: vs(10),
        zIndex: 1
    },
    inputContainer: {
        paddingVertical: vs(13),
        paddingLeft: vs(35)
    }
})