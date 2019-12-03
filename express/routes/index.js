var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.send("Twitter, but for pets!").status(200);
});

module.exports = router;
