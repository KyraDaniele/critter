const express = require("express");
const router = express.Router();
const postClass = require("../models/posts");

router.get("/", async (req, res) => {
	const postData = await postClass.getPosts();
	res.json(postData).status(200);
});

module.exports = router;
