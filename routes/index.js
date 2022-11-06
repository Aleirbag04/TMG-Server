const router = require("express").Router({ mergeParams: true });

const dataRouter = require("./data");

// base path
router.use("/data", dataRouter);

module.exports = router;
