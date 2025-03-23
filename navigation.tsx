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

const Tab = createBottomTabNavigator<RootStackParamList>();

// Couleurs personnalisées
const activeColor = "#6200ee"; // Couleur active (votre couleur d'accent)
const inactiveColor = "#666"; // Couleur inactive (gris)

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = getTabIcon(route, focused);
            // Utilisez la couleur passée par screenOptions
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: activeColor, // Couleur active pour les icônes et le texte
          tabBarInactiveTintColor: inactiveColor, // Couleur inactive pour les icônes et le texte
        })}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Ajouter un service" component={AddServiceScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
