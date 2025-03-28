# Application de Mise en Relation de Services

## Description

Cette application permet aux utilisateurs de proposer et de rechercher des services entre particuliers. Que ce soit pour des cours, des réparations, des services de garde ou d'autres besoins, l'application facilite la mise en relation entre les utilisateurs.

## Fonctionnalités

- **Accueil :** Page d'accueil avec un message de bienvenue et un bouton pour ajouter un service.
- **Services :** Liste des services disponibles avec des détails.
- **Ajouter un service :** Formulaire pour proposer un nouveau service.
- **Profil utilisateur :** Page de profil avec les informations de l'utilisateur et des options pour modifier le profil ou se déconnecter.

## Technologies Utilisées

- **React Native :** Framework pour développer des applications mobiles cross-platform.
- **React Navigation :** Gestion de la navigation entre les écrans.
- **React Native Paper :** Bibliothèque de composants UI pour un design moderne et réactif.
- **TypeScript :** Langage de programmation pour un code plus sûr et maintenable.
- **React Native Vector Icons :** Bibliothèque d'icônes pour une interface utilisateur attrayante.

## Installation

Suivez ces étapes pour installer et exécuter l'application sur votre machine locale.

### Prérequis

- Node.js (version 22 ou supérieure)
- npm ou yarn
- Expo CLI (optionnel, pour le développement rapide)

### Étapes

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Démarrer l'application :**

   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Exécuter sur un émulateur ou un appareil physique :**
   - Pour iOS :
     ```bash
     npm run ios
     # ou
     yarn ios
     ```
   - Pour Android :
     ```bash
     npm run android
     # ou
     yarn android
     ```
   - Pour Expo Go (sur un appareil physique) :
     - Scannez le QR code affiché dans le terminal avec l'application Expo Go.

## Structure du Projet

```
votre-repo/
├── assets/               # Ressources statiques (images, icônes, etc.)
├── components/           # Composants réutilisables
├── navigation/           # Configuration de la navigation
├── screens/              # Écrans de l'application
├── types/                # Définitions TypeScript
├── utils/                # Utils réutilisables
├── App.tsx               # Point d'entrée de l'application
├── README.md             # Fichier README
└── package.json          # Dépendances et scripts
```

## Captures d'Écran

| Accueil                                    | Services                                        | Ajouter un Service                                           | Profil                                       |
| ------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- | ----------------------------------------- |
| ![Accueil](./assets/screen-shots/home.png) | ![Services](./assets/screen-shots/services.png) | ![Ajouter un Service](./assets/screen-shots/add-service.png) | ![Profil](./assets/screen-shots/profile.png) | ![Login](./assets/screen-shots/login.png) |

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer au projet, suivez ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Committez vos changements (`git commit -m 'Ajouter une nouvelle fonctionnalité'`).
4. Pushez la branche (`git push origin feature/nouvelle-fonctionnalité`).
5. Ouvrez une Pull Request.

## MVE:

Quelques idées supplémentaires pour aller plus loin :

### Authentification :

Ajoutez un système de connexion/d'inscription pour les utilisateurs.

Utilisez Firebase Authentication ou une autre solution pour gérer les utilisateurs.

### Base de données :

Intégrez une base de données (comme Firebase Firestore ou MongoDB) pour stocker les services et les profils des utilisateurs.

### Recherche de services :

Ajoutez une fonctionnalité de recherche pour permettre aux utilisateurs de trouver des services par catégorie, localisation, etc.

### Notifications :

Utilisez des notifications push pour informer les utilisateurs des nouvelles demandes de services ou des messages.

### Évaluation et commentaires :

Permettez aux utilisateurs de noter et de commenter les services qu'ils ont utilisés.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
