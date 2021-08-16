// const router = require("express").Router();
const path = require("path");

app.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("params", req.params.id);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
