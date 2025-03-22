# Auth Dashboard - React, Angular & Backend

Ce repository contient trois projets :  

1. **Backend Server** – Un serveur JSON pour simuler une API.  
2. **Frontend React** – Une interface utilisateur développée avec React.  
3. **Frontend Angular** – Une autre interface utilisateur développée avec Angular.  

---

## 📚 Structure du Projet

```
auth-dashboard-react-angular/
│── mon-backend-server/    # Serveur JSON (Fake API)
│── mon-projet-react/      # Application React
│── mon-projet-angular/    # Application Angular
│── README.md              # Documentation
```

---

## 🚀 Comment Exécuter les Projets ?

### 🖥️ **1. Démarrer le Backend Server (JSON Server)**

📌 **Installation des dépendances**  
Assure-toi d'avoir **Node.js** installé, puis exécute :

```sh
cd mon-backend-server
npm install -g json-server  # Installe JSON Server globalement (si ce n'est pas déjà fait)
```

📌 **Lancer le serveur**  
```sh
json-server --watch db.json --port 5000
```
🔹 **Accès API** : `http://localhost:5000/`  

---

### ⚪ **2. Démarrer l'application React**
📌 **Installation des dépendances**  
```sh
cd mon-projet-react
npm install
```

📌 **Lancer le serveur React**  
```sh
npm run dev
```
🔹 **Accès à l'application React** : `http://localhost:3000/` (ou un autre port si déjà utilisé)

---

### ⚪ **3. Démarrer l'application Angular**
📌 **Installation des dépendances**  
```sh
cd mon-projet-angular
npm install
```

📌 **Lancer le serveur Angular**  
```sh
ng serve
```
🔹 **Accès à l'application Angular** : `http://localhost:4200/`  

---

## 🛠️ Technologies Utilisées
- **Backend** : JSON Server  
- **Frontend 1** : React.js + Vite  
- **Frontend 2** : Angular  
- **Base de données** : JSON (simulé avec JSON Server)  

---

