import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FILTERS } from '../../components/Constants/filters'
import AppText from '../../components/AppText'
import { vs, s } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import { useTranslation } from 'react-i18next'

const Filters = () => {
    const [selectedFilter, SetSelectedFilter] = useState(FILTERS[0].id)
    const { t } = useTranslation()
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} style={{ flexGrow: 0, marginBottom: vs(10) }}>
            {
                FILTERS.map((filter) => {
                    const isActive = filter.id === selectedFilter;
                    return (
                        <TouchableOpacity style={[styles.filterChip, { backgroundColor: isActive ? APP_COLORS.secondary : "#0a093028" }]} key={filter.id} onPress={() => { SetSelectedFilter(filter.id) }}>
                            <AppText size='sm' color={isActive ? 'white' : 'black'}>
                                {t(`${filter.label}`)}
                            </AppText>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Filters

const styles = StyleSheet.create({
    scrollStyle: {
        alignSelf: 'flex-start',
        gap: 8
    },
    filterChip: {
        paddingHorizontal: s(20),
        paddingVertical: vs(10),
        borderRadius: APP_TYPOGRAPHY.sizes.xl,
    }

})