const express = require("express");
const bodyParser = require("body-parser");
const sanitize = require("sanitize");
const path = require("path");
const TweetsRouter = require("./tweets/router");
const TagsRouter = require("./tags/router");

/**
 * This class provides the wrapper of express application
 */
class App {

	/**
	 * This method provides the initialize methods of instance @App
	 */
	constructor() {

		this.app = express();
		this.middlewares();
		this.routes();

	}

	/**
	 * This method provides the middlewares of application
	 */
	middlewares() {

		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true, }));
		this.app.use(express.static("public"));
		this.app.use(sanitize.middleware);

	}

	/**
	 * This methos provides the routes of application
	 */
	routes() {

		this.app.use("/api/tweets", TweetsRouter);
		this.app.use("/api/tags", TagsRouter);
		this.app.get("*", (req, res) => {

			res.sendFile("index.html", { root: path.resolve("public/"), });
		});
	}

}

module.exports = new App().app;
