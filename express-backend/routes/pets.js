const express = require("express");
const router = express.Router();
const petClass = require("../models/pets");

router.get("/", async (req, res) => {
	const petData = await petClass.getInfo();
	res.json(petData).status(200);
});

module.exports = router;
