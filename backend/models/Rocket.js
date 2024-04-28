import mongoose from "mongoose";

const RocketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  firstFlight: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Rocket", RocketSchema);
