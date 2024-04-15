const express = require('express');
const router = express.Router();
const Rocket = require('../models/Rocket');

router.get('/', async (req, res) => {
  // Ici, vous récupérerez la liste des fusées de la base de données et les renverrez
});

module.exports = router;