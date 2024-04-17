const express = require('express');
const router = express.Router();
const Rocket = require('../models/Rocket');

router.get('/', async (req, res) => {
  try {
    const rockets = await Rocket.find();
    res.json(rockets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;