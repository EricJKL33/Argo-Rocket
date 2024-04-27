require("dotenv").config();

const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid username or passworddddd" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
