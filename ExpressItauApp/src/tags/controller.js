/**
 * This class provides the controller to the calls of tags api
 */
class TagsController {

	/**
	 * This methos provides the initialize of @TagsController
	 * @param {Object - instance of TagsService} TagsService 
	 */
	constructor(TagsService) {

		this.service = TagsService;
	}

	/**
	 * This method provides the handler of tags lists
	 * @param {Object - Request.options express application} req 
	 * @param {Object - Response.options express application} res 
	 */
	async list(req, res) {
		try {

			let data = await this.service.fetchAll();
			data.map(_ => (_.tag = `#${_.tag}`));

			return res.status(200).json(data);

		} catch (err) {

			return res.status(404);
		}

	}
}

module.exports = TagsController;
