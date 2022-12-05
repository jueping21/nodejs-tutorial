const express = require("express");
const path = require("path");
const studentRouter = require("../routers/student");
const session = require("express-session");
const FileStore = require('session-file-store')(session);
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
// configure view engine and its path
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../views"));


/**
 * Create a session middleware with the given options.
 * This middleware creates session for both request and 
 * response. Conventionally, we edit session via request.
 * 
 * session for response => 
 *  response.socket.parser.incoming.socket.parser.incoming.socket.parser.incoming.session
 */
let fileStoreOptions = {};
app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: "hellohellohello"
}))

app.use("/student", studentRouter);

app.get("/", (request, response) => {
    response.render("login")
})

// A test rout for reading session info from both request and response
// app.test("/set", (request, response) => {
//     const rs = response.socket.parser.incoming.socket.parser.incoming.socket.parser.incoming.session
//     console.log("response", rs);
//     console.log("request", request.session);
//     console.log(request.session === rs);
//     response.send("test for session")
// })


// https://expressjs.com/en/4x/api.html#res.cookie
app.post("/login", (request, response) => {
    const { username, password } = request.body;
    if (username == "admin" && password == "123") {
        request.session.loginUser = "admin";
        request.session.save(() => {
            response.redirect("/student/list");
        });
    } else {
        response.send("login failed")
    }
})

app.get("/logout", (request, response) => {
    request.session.destroy(() => {
        response.redirect("/");
    });
})

app.use((request, response) => {
    response.status(404).send("<h1>404 Not found<h1/>")
})

app.listen(8000, () => {
    console.log("Server is up at 8000");
});