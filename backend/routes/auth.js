import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcrypt";
import express from "express";
const router = express.Router();
import User from "../models/User.js";
import jwt from "jsonwebtoken";

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/username/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ username: user.username });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

