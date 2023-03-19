import app from "./app";

// enviroment variables
const PORT = process.env.PORT || 5500;

// create a web server
const main = async () => {
	try {
		// connection with database

		// open the server at the PORT
		app.listen(PORT, () => {
			console.log(`[server]: is running at ${PORT} port`);
		});
	} catch (err) {
		console.log(err);
	}
};

main();
