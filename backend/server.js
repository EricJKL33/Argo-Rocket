import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import rocketRoutes from "./routes/rocket.js";
import cors from "cors";

const app = express();

const corsOrigin = process.env.CORS_ORIGIN;
const mongoDbUrl = process.env.MONGODB_URL;

app.use(cors());
app.use(
  cors({
    origin: corsOrigin,
  })
);

mongoose
  .connect(`${mongoDbUrl}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());
app.use("/user", authRoutes);
app.use("/rocket", rocketRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));
