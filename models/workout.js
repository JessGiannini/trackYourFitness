const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Exercise = require("./exercise");

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exercises: {
    type: Array,
  },
  totalDistance: {
    type: Number,
    default: 0,
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
