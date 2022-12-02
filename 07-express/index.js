// import express
const express = require("express")

// create a server instance 
const app = express();

// middleware 
// https://expressjs.com/en/guide/using-middleware.html
app.use("/", (request, response, next) => {
    console.log("this is from middleware");
    next()
})

// routing
app.get("/", (request, response) => {
    // console.log(request);
    // response.sendStatus(404);
    response.status(200).send("<h1>my first server </h1>");
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })
  
// start server and listen the port
app.listen(8000, () => {
    console.log("Server is up at 8000");
}) 
