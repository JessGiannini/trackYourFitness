const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Exercise type is required.",
  },

  name: {
    type: String,
    unique: true,
    required: true,
  },

  duration: {
    type: Number,
    trim: true,
    min: 1,
  },

  weight: {
    type: Number,
    min: 1,
    trim: true,
  },

  reps: {
    type: Number,
    min: 1,
    trim: true,
  },

  sets: {
    type: Number,
    min: 1,
    trim: true,
  },

  distance: {
    type: Number,
    min: 1,
    trim: true,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = ExerciseSchema;
