import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from "../screens/SignInScreen";
import { APP_COLORS } from "../themes/appColors";
import { s, vs, ms } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useTranslation } from "react-i18next";


const Tab = createBottomTabNavigator()

export default function BottomTab() {
    const { t } = useTranslation()
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: APP_COLORS.primary,
            tabBarLabelStyle: {
                fontSize: s(12),
                marginTop: vs(2),
            },
            tabBarStyle: {
                height: 80,
                marginTop: -40
            }

        }}>
            <Tab.Screen name={t('home')} component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => { return <Ionicons name="home-sharp" size={size} color={color} /> } }} />
            <Tab.Screen name={t('cart')} component={CartScreen} options={{ tabBarIcon: ({ color, size }) => { return <Ionicons name="cart-sharp" size={size} color={color} /> } }} />
            <Tab.Screen name={t('profile')} component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => { return <Ionicons name="person" size={size} color={color} /> } }} />
        </Tab.Navigator>
    );
}