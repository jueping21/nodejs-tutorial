const express = require("express");
const path = require("path");
const studentRouter = require("../routers/student");
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));

// configure view engine and its path
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../views"));

app.use("/student", studentRouter);

app.use((request, response) => {
    console.log("404");
    response.status(404).send("<h1>404 Not found<h1/>")
})

app.listen(8000, () => {
    console.log("Server is up at 8000");
});