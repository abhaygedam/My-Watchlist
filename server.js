const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
	static: "./build",
});

const port = process.env.PORT || 5000;
server.unsubscribe(middlewares);
server.use(
	jsonServer.rewriter({
		"/api/*": "/$1",
	})
);

app.use(cors());
server.use(router);
server.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
