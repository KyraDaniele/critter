const db = require("./conn");

class Post {
	constructor(id, title, content, pet_id) {
		this.id = id;
		this.title = title;
		this.username = username;
		this.content = content;
		this.pet_id = pet_id;
	}
	static async getPosts() {
		try {
			const response = await db.any(`SELECT * FROM posts`);
			return response;
		} catch (err) {
			return err.message;
		}
	}
}
module.exports = Post;
