// types.ts
export type RootStackParamList = {
  Login: undefined; // Pas de paramètres pour cette route
  Accueil: undefined; // Pas de paramètres pour cette route
  Services: undefined;
  "Ajouter un service": undefined;
  Profil: undefined;
};

// Déclarez les types pour useNavigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
