// utils/tabIcons.ts
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigationTypes";

/**
 * Retourne le nom de l'icône en fonction de la route et de l'état actif/inactif.
 * @param route - La route actuelle.
 * @param focused - Si l'onglet est actif ou non.
 * @returns Le nom de l'icône.
 */
export const getTabIcon = (
  route: RouteProp<RootStackParamList, keyof RootStackParamList>,
  focused: boolean
): string => {
  switch (route.name) {
    case "Accueil":
      return focused ? "home" : "home-outline";
    case "Services":
      return focused ? "format-list-bulleted" : "format-list-bulleted-type";
    case "Ajouter un service":
      return focused ? "plus-circle" : "plus-circle-outline";
    case "Profil":
      return focused ? "account" : "account-outline";
    case "Login":
      return focused ? "login" : "login";
    default:
      return "unknown"; // Icône par défaut
  }
};
