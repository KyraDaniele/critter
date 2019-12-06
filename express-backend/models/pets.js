const db = require("./conn");

class Pet {
	constructor(id, name, username, password, type, description) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
		this.type = type;
		this.description = description;
	}
	static async getInfo() {
		try {
			const response = await db.any(`SELECT * FROM pets`);
			return response;
		} catch (err) {
			return err.message;
		}
	}
}
module.exports = Pet;
