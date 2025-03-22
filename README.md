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
├── App.tsx               # Point d'entrée de l'application
├── README.md             # Fichier README
└── package.json          # Dépendances et scripts
```

## Captures d'Écran

| Accueil                                  | Services                                  | Ajouter un Service                                  | Profil                                  |
| ---------------------------------------- | ----------------------------------------- | --------------------------------------------------- | --------------------------------------- |
| ![Accueil](https://i.imgur.com/xyz1.png) | ![Services](https://i.imgur.com/xyz2.png) | ![Ajouter un Service](https://i.imgur.com/xyz3.png) | ![Profil](https://i.imgur.com/xyz4.png) |

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer au projet, suivez ces étapes :

1. Forkez le dépôt.
2. Créez une nouvelle branche (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Committez vos changements (`git commit -m 'Ajouter une nouvelle fonctionnalité'`).
4. Pushez la branche (`git push origin feature/nouvelle-fonctionnalité`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
