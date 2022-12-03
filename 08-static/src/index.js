const express = require("express");
const path = require("path")

const app = express();

// Using middleware to fetch static webpages. 
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath))

app.get("/", () => {
    console.log("Here should not run.");
})

// express.urlencoded({extended: false}) is a body parser for html post form
// express.json() is a body parser for post request but not html
app.use(express.urlencoded({ extended: true }))

// Using get to simulate a login process
// http://localhost:8000/
app.get("/login", (request, response) => {
    // use request.query to get the query
    // https://expressjs.com/en/api.html#req.query
    console.log("get login => username:", request.query.username);
    console.log("get login => password:", request.query.password);
    response.sendStatus(200);
})

// Using post to simulate a login process
// http://localhost:8000/post.html
app.post("/login", (request, response) => {
    console.log("post login => username:", request.body.username);
    console.log("post login => password:", request.body.password);
    response.sendStatus(200);;
})

/**
 * req.params:
 * 
 * This property is an object containing properties mapped to the named 
 * route “parameters”. For example, if you have the route /user/:name, 
 * then the “name” property is available as req.params.name. This object 
 * defaults to {}.
 */
app.get("/hello/:id/:name", (request, response) => {
    console.log(request.params);
    response.send("This is from hello routing.");
})

/**
 * Using middleware deals with 404 page. 
 * The LAST middleware can ne used to deal with 404 pages since
 * the middleware has an execution order.
 */
app.use((request, response) => {
    response.status(404).send("<h1>404 Not found<h1/>")
})

app.listen(8000, () => {
    console.log("Server is up at 8000.");
})