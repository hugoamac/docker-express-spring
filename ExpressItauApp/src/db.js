const mysql = require("mysql");
const config = require("../config/default");

/**
 * This class provides the connection of database 
 */
class DB {

	/**
	 * This method provides the initialize of instance @DB
	 */
	constructor() {

		this.pool = mysql.createPool(config.database);
	}

	/**
	 * This method provides the execute by sql on database
	 * @param {String} sql 
	 * @param {Object} bind 
	 */
	async execute(sql, bind) {

		return new Promise((resolve, reject) => {
			this.pool.query(sql, bind || [], (err, results) => {
				if (err) {
					reject(err);
				}
				resolve(results);
			});
		});
	}

}

module.exports = new DB();
