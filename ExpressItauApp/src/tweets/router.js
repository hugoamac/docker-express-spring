const router = require("express").Router();
const logger = require("../logger");
const DB = require("../db");
const TweetsService = require("./service");
const TweetsController = require("./controller");
const controller = new TweetsController(new TweetsService(DB), logger);

router.get("/:tag?", async (req, res, next) => {

	return await controller.list(req, res);

});

router.post("/import", async (req, res, next) => {

	return await controller.import(req, res);

});

module.exports = router;
