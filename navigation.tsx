import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AddServiceScreen from "./screens/AddServiceScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ServicesScreen from "./screens/ServicesScreen";
import { RootStackParamList } from "./types/navigationTypes";
import HomeScreen from "./screens/ HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { getTabIcon } from "./utils/tabIcons";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const Tab = createBottomTabNavigator<RootStackParamList>();

// Couleurs personnalisées
const activeColor = "#6200ee";
const inactiveColor = "#666";
const disabledColor = "#ccc";

export default function AppNavigation() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = getTabIcon(route, focused);
            const iconColor =
              route.name === "Login" || isAuthenticated ? color : disabledColor;
            return <Icon name={iconName} size={size} color={iconColor} />;
          },

          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: inactiveColor,
        })}
      >
        {/* Écran de connexion (toujours accessible) */}
        <Tab.Screen name="Login" component={LoginScreen} />

        {/* Écrans protégés */}
        <Tab.Screen name="Accueil">
          {() => (
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          )}
        </Tab.Screen>
        <Tab.Screen name="Services">
          {() => (
            <ProtectedRoute>
              <ServicesScreen />
            </ProtectedRoute>
          )}
        </Tab.Screen>
        <Tab.Screen name="Ajouter un service">
          {() => (
            <ProtectedRoute>
              <AddServiceScreen />
            </ProtectedRoute>
          )}
        </Tab.Screen>
        <Tab.Screen name="Profil">
          {() => (
            <ProtectedRoute>
              <ProfileScreen />
            </ProtectedRoute>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
