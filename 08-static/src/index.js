const express = require("express");
const path = require("path")

const app = express();

// set middleware
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath))

app.get("/", () => {
    console.log("Here should not run.");
})

// Using post get to simulate a login process
// app.get("/login", (request, response) => {
//     // use request.query to get the query
//     console.log("username: ", request.query.username);
//     console.log("password: ", request.query.password);
//     response.sendStatus(200);
// })

app.get("/login", (request, response) => {
    // use request.query to get the query
    console.log("username: ", request.query.username);
    console.log("password: ", request.query.password);
    response.sendStatus(200);
})

app.listen(8000, () => {
    console.log("Server is up at 8000.");
})