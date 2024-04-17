// Importation des modules nécessaires
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js");
const rocketRoutes = require("./routes/rocket.js");

// Création de l'application Express
const app = express();
const cors = require('cors');

app.use(cors());
app.use(cors({
  origin: 'http://localhost:8080' // Remplacez par l'origine de votre application frontend
}));

// Configuration de MongoDB
mongoose.connect("mongodb://localhost:27017/rockets")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Définition des routes
app.use(express.json());
app.use("/user", authRoutes);
app.use("/rocket", rocketRoutes);


// Démarrage du serveur
app.listen(3000, () => console.log("Server is running on port 3000"));
