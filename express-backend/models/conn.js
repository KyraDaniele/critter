const pgp = require("pg-promise")({
	query: e => {
		console.log("QUERY:", e.query); //Testing to make sure query shows in terminal
	}
});

const options = {
	host: "localhost",
	database: "blog"
};

const db = pgp(options);

module.exports = db;
