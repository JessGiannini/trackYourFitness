const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async ({ body }, res) => {
  try {
    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/range", async (req, res) => {
  try {
    res.status(200).json(rangeWorkouts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
