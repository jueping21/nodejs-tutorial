const express = require("express");
const path = require("path");
const studentRouter = require("../routers/student");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// configure view engine and its path
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../views"));

app.use("/student", studentRouter);

app.get("/", (request, response) => {
    response.render("login")
})

// https://expressjs.com/en/4x/api.html#res.cookie
app.post("/login", (request, response) => {
    const {username, password} = request.body;
    if(username == "admin" && password == "123"){
        response.cookie("username", "admin");
        response.redirect("/student/list")
    }else{
        response.send("login failed")
    }
})

app.use((request, response) => {
    response.status(404).send("<h1>404 Not found<h1/>")
})

app.listen(8000, () => {
    console.log("Server is up at 8000");
});