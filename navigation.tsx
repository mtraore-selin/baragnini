import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AddServiceScreen from "./screens/AddServiceScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ServicesScreen from "./screens/ServicesScreen";
import { RootStackParamList } from "./types/navigationTypes";
import HomeScreen from "./screens/ HomeScreen";

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
            let iconName;

            if (route.name === "Accueil") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Services") {
              iconName = focused
                ? "format-list-bulleted"
                : "format-list-bulleted-type";
            } else if (route.name === "Ajouter un service") {
              iconName = focused ? "plus-circle" : "plus-circle-outline";
            } else if (route.name === "Profil") {
              iconName = focused ? "account" : "account-outline";
            } else {
              iconName = "unknown"; // Icône par défaut
            }

            // Utilisez la couleur passée par screenOptions
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: activeColor, // Couleur active pour les icônes et le texte
          tabBarInactiveTintColor: inactiveColor, // Couleur inactive pour les icônes et le texte
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Ajouter un service" component={AddServiceScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
