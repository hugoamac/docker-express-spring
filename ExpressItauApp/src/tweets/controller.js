/**
 * This class provides the tweet controller of application
 */
class TweetsController {

	/**
	 * 
	 * @param {Object - instance of TweetService} TweetsService 
	 * @param {Object - pointer to logger of instance Logger} logger 
	 */
	constructor(TweetsService, logger) {

		this.service = TweetsService;
		this.logger = logger;
	}

	/**
	 * This method provides the handler to retrieve tweets list
	 * @param {Object - Request.options express application} req 
	 * @param {Object - Response.options express application} res 
	 */
	async list(req, res) {
		try {

			//	eslint-disable-next-line
			const tag = `#${req.params.tag}`;
			const data = await this.service.search({ q: tag, });

			return res.status(200).json({ data, });

		} catch (err) {

			this.logger.info(err);
			return res.status(404);
		}

	}

	/**
	 * This method provides the handler to import tweets from twit api
	 * @param {Object - Request.options express application} req 
	 * @param {Object - Response.options express application} res 
	 */
	async import(req, res) {

		try {

			const input = req.body;
			const data = await this.service.import(input);

			return res.status(200).json({ data, });

		} catch (err) {

			this.logger.info(err);
			return res.status(200).json({ data: false, });
		}
	}
}

module.exports = TweetsController;
