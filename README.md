# 👨‍🍳 Chef Management System

Application web **front-end** développée avec **React** pour gérer une plateforme de restauration : inscription des **chefs** et des **clients**, gestion des **plats** et gestion des **utilisateurs**, le tout présenté dans un site vitrine de restaurant.

> ℹ️ Il n'y a pas de serveur ni de base de données : toutes les données sont enregistrées dans le **`localStorage`** du navigateur. Elles restent donc propres à chaque navigateur.

---

## 📑 Sommaire

- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#-technologies-utilisées)
- [Structure du projet](#-structure-du-projet)
- [Pages et routes](#-pages-et-routes)
- [Données enregistrées](#-données-enregistrées)
- [Prérequis](#-prérequis)
- [Installation et lancement](#-installation-et-lancement)
- [Scripts disponibles](#-scripts-disponibles)
- [Auteure](#-auteure)

---

## ✨ Fonctionnalités

### 🏠 Site vitrine
- Page d'accueil de restaurant composée de plusieurs sections : bannière, offres exclusives, à propos, vidéo, menu, équipe de chefs, réservation de table et avis clients

### 👥 Gestion des utilisateurs
- **Inscription d'un chef** : prénom, nom, email, téléphone, adresse, mot de passe, spécialité, expérience
- **Inscription d'un client** : prénom, nom, email, téléphone, adresse, mot de passe
- **Liste des chefs et des clients** dans deux tableaux distincts
- **Consultation des détails** d'un utilisateur et **modification** de ses informations via une fenêtre modale
- **Suppression** d'un utilisateur

### 🍽️ Gestion des plats
- **Ajout d'un plat** (nom, description, prix) avec validation : champs obligatoires et prix numérique
- **Liste des plats** dans un tableau
- **Détails d'un plat**
- **Modification** d'un plat via une fenêtre modale
- **Suppression** d'un plat

---

## 🧰 Technologies utilisées

| Domaine | Technologie |
| --- | --- |
| Bibliothèque UI | React 18 |
| Routage | React Router DOM 6 |
| Style | Bootstrap 5.3 et CSS du template |
| Outil de build | Create React App (`react-scripts` 5) |
| Stockage | `localStorage` du navigateur |
| Tests | React Testing Library |

---

## 📂 Structure du projet

```
Chef-Management-System/
├── public/                    # index.html, CSS et images du template
├── src/
│   ├── components/
│   │   ├── Header.js          # Barre de navigation
│   │   ├── Footer.js          # Pied de page
│   │   ├── Home.js            # Page d'accueil (assemble les sections)
│   │   ├── Banner.js, Exclusive.js, About.js, Video.js, Food.js,
│   │   │   Chefs.js, Reservation.js, Review.js, ExclusiveItem.js   # Sections de l'accueil
│   │   ├── Login.js           # Formulaire de connexion
│   │   ├── SignupChef.js      # Inscription d'un chef
│   │   ├── SignupClient.js    # Inscription d'un client
│   │   ├── UsersList.js       # Liste des chefs et des clients
│   │   ├── UserDetails.js     # Détails / modification d'un utilisateur
│   │   ├── AddDish.js         # Ajout d'un plat
│   │   ├── DishList.js        # Liste, modification et suppression des plats
│   │   └── DishDetails.js     # Détails d'un plat
│   ├── App.js                 # Routes de l'application
│   └── index.js               # Point d'entrée
├── package.json
└── README.md
```

---

## 🧭 Pages et routes

| Route | Page |
| --- | --- |
| `/` | Accueil |
| `/login` | Connexion |
| `/signup-chef` | Inscription chef |
| `/signup-client` | Inscription client |
| `/add-dish` | Ajouter un plat |
| `/dish-list` | Liste des plats |
| `/dish/:index` | Détails d'un plat |
| `/users-list` | Liste des chefs et des clients |
| `/user-details` | Détails d'un utilisateur |

---

## 💾 Données enregistrées

Les données sont stockées dans le `localStorage` sous les clés suivantes :

| Clé | Contenu |
| --- | --- |
| `chefData` | Liste des chefs inscrits |
| `clientData` | Liste des clients inscrits |
| `dishes` | Liste des plats (`name`, `description`, `price`) |

> 💡 Pour réinitialiser les données, ouvre les outils de développement du navigateur (`F12`) → onglet **Application** → **Local Storage**, puis supprime les clés ci-dessus.

---

## ✅ Prérequis

- [Node.js](https://nodejs.org/) (version LTS recommandée) et npm
- [Git](https://git-scm.com/)

---

## 🚀 Installation et lancement

```bash
# 1. Cloner le dépôt
git clone https://github.com/ranimbr/Chef-Management-System.git
cd Chef-Management-System

# 2. Installer les dépendances
npm install

# 3. Lancer l'application en mode développement
npm start
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm start` | Lance l'application en mode développement |
| `npm run build` | Génère la version de production dans le dossier `build/` |
| `npm test` | Lance les tests |

---



## 👩‍💻 Auteure

**Ranim Ben Rajeb** — [@ranimbr](https://github.com/ranimbr)
