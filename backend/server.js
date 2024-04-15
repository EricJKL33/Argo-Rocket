// Importation des modules nécessaires
import express from "express";
import { connect } from "mongoose";
import authRoutes from "./routes/auth.js";
import rocketRoutes from "./routes/rocket.js";

// Création de l'application Express
const app = express();

// Configuration de MongoDB
connect("mongodb://localhost:27017/spacex", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Définition des routes
app.use(express.json());
app.use("/user", authRoutes);
app.use("/rocket", rocketRoutes);


// Démarrage du serveur
app.listen(3000, () => console.log("Server is running on port 3000"));
