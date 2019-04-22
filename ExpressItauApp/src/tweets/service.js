const Twit = require("twit");
const moment = require("moment");
const Entities = require("html-entities").AllHtmlEntities;
const config = require("../../config/default");

/**
 * This class provides the service to all business rules of tweet entity
 */
class TweetsService {

	/**
	 * This method provides the initialize of @TweetsService
	 * @param {Object - instance of DB} db 
	 */
	constructor(db) {

		this.twit = new Twit(config.twitter);
		this.db = db;
	}

	/**
	 * This methos provides the search to tweet from data object 
	 * @param {Object - Data of Twit module} data 
	 */
	async search(data) {

		return new Promise((resolve, reject) => {

			this.twit.get("search/tweets", data, (err, data) => {

				if (err) {
					reject(err);
				}

				resolve(TweetsService.transformResponse(data.statuses));
			});

		});
	}

	/**
	 * This method provides the transformation of data to custom formatter
	 * @param {Object - Data Response Twit module} data 
	 */
	static transformResponse(data) {

		if (data.lenght === 0) {
			return [];
		}

		let entities = new Entities();

		data = data.map(item => {

			//	eslint-disable-next-lines
			return {
				user: {
					id: item.user.id,
					name: entities.encode(item.user.name),
					screen_name: entities.encode(item.user.screen_name),
					location: entities.encode(item.user.location || "ND"),
					followers_count: item.user.followers_count,
					lang: item.user.lang,
					description: entities.encode(item.user.description),
					profile_image_url: item.user.profile_image_url,
				},
				tweet: {
					id: item.id,
					text: entities.encode(item.text),
					created_at: moment(new Date(item.created_at)).format("YYYY-MM-DD HH:mm:ss"),
				},
			};
		});

		return data;
	}

	/**
	 * This method provides the handler to insert user on database
	 * @param {Object - Data json} data 
	 */
	async insertUser(data) {

		let { id, name, screen_name, location, followers_count, lang, description, profile_image_url, } = data;

		try {

			//	eslint-disable-next-line 
			const sql = `INSERT 
							users 
							(id,name,screen_name,location,followers_count,lang,description,profile_image_url)
							VALUES (?,?,?,?,?,?,?,?)`;

			await this.db.execute(sql, [id, name, screen_name, location, followers_count,
				lang, description, profile_image_url,
			]);

			return id;

		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * This method provides the hanlder to insert tweet on database
	 * @param {Object - Data json} data 
	 */
	async insertTweet(data) {

		let { id, text, tags_id, users_id, created_at, } = data;

		try {

			//	eslint-disable-next-line 
			const sql = `INSERT 
							tweets 
							(id, text, tags_id, users_id, created_at)
							VALUES (?,?,?,?,?)`;

			//	eslint-disable-next-line 
			await this.db.execute(sql, [id, text, tags_id, users_id, created_at,]);

			return id;

		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * This method provides the user check if it exists in the database
	 * @param {int} id 
	 */
	async isExistsUserBy(id) {

		//	eslint-disable-next-line 
		const sql = `SELECT COUNT(id) as total FROM users WHERE id=?`;
		const result = await this.db.execute(sql, [id,]);

		return result[0].total > 0;
	}

	/**
	 * This method provides the tweet check if it exists in the database
	 * @param {int} id 
	 */
	async isExistsTweetBy(id) {

		//	eslint-disable-next-line 
		const sql = `SELECT COUNT(id) as total FROM tweets WHERE id=?`;
		const result = await this.db.execute(sql, [id,]);

		return result[0].total > 0;
	}

	/**
	 * This method provides the tweet import to the database
	 * @param {Object - Data json} input 
	 */
	async import(input) {

		if (input === undefined) {
			throw new Error("input undefined");
		}

		let { tag, data, } = input;

		if (tag === undefined) {
			throw new Error("tag undefined");
		}

		if (data === undefined || data.lenght === 0) {
			throw new Error("data undefined");
		}

		try {

			for (let item of data) {

				const existsUser = await this.isExistsUserBy(item.user.id);
				const existsTweet = await this.isExistsTweetBy(item.tweet.id);

				if (!existsUser) {
					await this.insertUser(item.user);
				}

				if (!existsTweet) {

					let dataTweet = {
						id: item.tweet.id,
						text: item.tweet.text,
						tags_id: tag.id,
						users_id: item.user.id,
						created_at: item.tweet.created_at,
					};
					await this.insertTweet(dataTweet);
				}
			}

			return true;

		} catch (err) {

			throw new Error(err);
		}

	}

}

module.exports = TweetsService;
