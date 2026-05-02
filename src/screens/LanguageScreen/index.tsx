import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    ListRenderItem,
    ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import { APP_COLORS } from "../../themes/appColors";
import { vs, s } from "react-native-size-matters";
import i18n from "../../localization/i18n";
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Language {
    id: string;
    name: string;
    code: string;
    image: ImageSourcePropType;
}

const LANGUAGES: Language[] = [
    {
        id: "1",
        name: "Türkçe",
        code: "tr",
        image: require(`../../../assets/Img/Flags/turkey.png`),
    },
    {
        id: "2",
        name: "English",
        code: "en",
        image: require(`../../../assets/Img/Flags/usa.png`),
    },
    {
        id: "3",
        name: "Deutsch",
        code: "de",
        image: require(`../../../assets/Img/Flags/deutsch.png`),
    },
    {
        id: "4",
        name: "Español",
        code: "es",
        image: require(`../../../assets/Img/Flags/espanol.png`),
    },
];

interface LanguageItemProps {
    language: Language;
    onPress: (language: Language) => void;
    isActive: boolean;
}

const LanguageItem: React.FC<LanguageItemProps> = ({
    language,
    onPress,
    isActive,
}) => (
    <TouchableOpacity
        onPress={() => onPress(language)}
        style={[styles.languageItem, isActive && styles.activeLanguageItem]}
    >
        <Image source={language.image} style={styles.flagImage} />
        <Text style={styles.languageName}>{language.name}</Text>
        {isActive && <View style={styles.activeDot} />}
    </TouchableOpacity>
);

const LanguageScreen: React.FC = () => {
    const [activeLanguageCode, setActiveLanguageCode] = useState(i18n.language);

    const handleLanguageSelect = async (language: Language) => {
        setActiveLanguageCode(language.code);
        i18n.changeLanguage(language.code)
        await AsyncStorage.setItem("appLanguage", language.code)
    };

    const renderItem: ListRenderItem<Language> = ({ item }) => (
        <LanguageItem
            language={item}
            onPress={handleLanguageSelect}
            isActive={item.code === activeLanguageCode}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={LANGUAGES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

export default LanguageScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: s(14),
        backgroundColor: APP_COLORS.background || "#FFFFFF",
        flex: 1,
        paddingTop: vs(20),
    },
    listContent: {
        paddingBottom: vs(20),
    },
    languageItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: APP_COLORS.card || "#F8F8F8",
        borderRadius: s(8),
        paddingVertical: vs(12),
        paddingHorizontal: s(15),
        marginBottom: vs(8),
        borderWidth: 1,
        borderColor: APP_COLORS.border || "#EEEEEE",
    },

    activeLanguageItem: {
        borderColor: APP_COLORS.primary || "#007AFF",
        borderWidth: 2,
        backgroundColor: "#E6F0FF",
    },
    flagImage: {
        width: s(35),
        height: vs(25),
        borderRadius: s(4),
        marginRight: s(15),
        resizeMode: "cover",
    },
    languageName: {
        flex: 1,
        fontSize: s(14),
        color: APP_COLORS.text || "#333333",
        fontWeight: "500",
    },

    activeDot: {
        width: s(10),
        height: s(10),
        borderRadius: s(5),
        backgroundColor: APP_COLORS.primary || "#007AFF",
        marginLeft: s(10),
    },
});
