import express from "express";
import Rocket from "../models/Rocket.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const rockets = await Rocket.find();
    res.json(rockets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
