# Argo Rocket

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running on your machine

## Installation

1. Clone this repository on your local machine using `git clone https://github.com/EricJKL33/Argo-Rocket.git`.
2. Navigate to the project directory with `cd argo-rocket`.
3. Install the dependencies with `npm run install-all`.

## Configuration

1. In the `backend` directory, rename the `.env.example` file to `.env`.
2. Open the `.env` file and replace `your-secret-key`, `your-front-localhost`, and `your-mongodb-url` with your own values.

## Populating the Database

1. Make sure MongoDB is running.
2. In the `backend` directory, run `node seed.js` to create and populate the database.

## Starting the Application

1. In the `argo-rocket` directory, start the application with `npm start`.

Your application should now be running at the address indicated in the terminal.