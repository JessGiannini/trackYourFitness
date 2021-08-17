const router = require("express").Router();

const apiRoutes = require("./api");
const exerciseRoutes = require("./exercise-routes");
const statsRoutes = require("./stats-routes");

router.use("/exercise", exerciseRoutes);
router.use("/stats", statsRoutes);
router.use("/api", apiRoutes);

// if no api routes hit, go here instead
// router.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// router.use("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/exerise.html"));
// });

// router.use("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/stats.html"));
// });

// router.use("/exercise", exerciseRoutes);
// router.use("/stats", statsRoutes);

module.exports = router;
