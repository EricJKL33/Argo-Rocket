const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signin", (req, res) => {
  // Ici, vous vérifierez les informations d'identification de l'utilisateur et renverrez un jeton
  // Note : dans un vrai projet, vous devriez hasher le mot de passe et utiliser un JWT pour l'authentification
  const { username, password } = req.body;
});

module.exports = router;
