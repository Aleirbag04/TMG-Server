const router = require("express").Router({ mergeParams: true });

const { getData, postData } = require("../controllers/dataControllers.js");

router.get("/", getData);

router.post("/", postData);

module.exports = router;
