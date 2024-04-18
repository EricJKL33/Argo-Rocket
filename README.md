# Argo Rocket


## Prérequis

- Node.js et npm installés sur votre machine
- MongoDB installé et en cours d'exécution sur votre machine

## Installation

1. Clonez ce dépôt sur votre machine locale en utilisant `git clone https://github.com/EricJKL33/Argo-Rocket.git`.
2. Naviguez jusqu'au répertoire du projet avec `cd argo-rocket`.
3. Installez les dépendances du avec `npm run install-all`.


## Configuration

1. Dans le répertoire `backend`, renommez le fichier `.env.example` en `.env`.
2. Ouvrez le fichier `.env` et remplacez `your-secret-key`, `your-front-localhost`, et `your-mongodb-url` par vos propres valeurs.

## Peuplement de la base de données

1. Assurez-vous que MongoDB est en cours d'exécution.
2. Dans le répertoire `backend`, exécutez `node seed.js` pour CREE  et peupler la base de données.

## Démarrage de l'application

1. Dans le répertoire `argo-rocket` démarrez l'application avec `npm start`.


Votre application devrait maintenant être en cours d'exécution à l'adresse indiquée dans le terminal.