const http = require("http");
const config = require("../config/default");
const logger = require("./logger");

/**
 * This class provides the wrapper of http server by nodejs core
 */
class Server {

	/**
	 * This method provides the initialize of @Server
	 * @param {Object - Instance express application} app 
	 */
	constructor(app) {

		this.http = http.createServer(app);
	}

	/**
	 * This method provides the initialization of the http server by listening to the port
	 */
	start() {

		return new Promise((resolve, reject) => {

			this.http.listen(config.server.port, (err) => {

				if (err) {
					logger.info(`Error on ${err}`);
					reject(err);
				}
				const message = `Server ${config.server.hostname} listen on port ${config.server.port}`;
				logger.info(message);
				resolve(message);
			});

		});
	}
}

module.exports = Server;
