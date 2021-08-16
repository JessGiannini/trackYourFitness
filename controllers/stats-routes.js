const router = require("express").Router();
const path = require("path");
const db = require("./models");

router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
