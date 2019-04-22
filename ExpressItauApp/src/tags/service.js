/**
 * This class provides the all rules to tags entity
 */
class TagsService {

	/**
	 * This method provides the initialize of @TagService
	 * @param {Object - instance DB} db 
	 */
	constructor(db) {
		this.db = db;
	}

	/**
	 * This method provides you to retrieve all tags from the database
	 */
	async fetchAll() {

		try {
			const sql = "SELECT * FROM tags ORDER BY id DESC";
			const result = await this.db.execute(sql);

			return result;
		} catch (err) {
			throw new Error(err);
		}

	}
}

module.exports = TagsService;
