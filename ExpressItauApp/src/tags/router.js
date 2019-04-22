const router = require("express").Router();
const TagsService = require("./service");
const TagsController = require("./controller");
const DB = require("../db");

router.get("/", async (req, res, next) => {

	const controller = new TagsController(new TagsService(DB));
	return await controller.list(req, res);

});

module.exports = router;
