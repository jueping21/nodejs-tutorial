const express = require("express");
const path = require("path");
let StudentDB = require("../data/studentDB.json");
const fs = require("fs/promises");
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));

// configure view engine and its path
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../views"));

app.get("/students", (request, response) => {
    // render view template 
    response.render("students", { StudentDB });
})

// add student
app.post("/add-student", (request, response) => {
    const id = (StudentDB.length == 0) ? 1 : StudentDB.at(-1).id + 1;
    const newStudent = {
        id,
        name: request.body.name,
        gender: request.body.gender,
        age: request.body.age,
        address: request.body.address
    }
    StudentDB.push(newStudent);
    fs.writeFile(
        path.resolve(__dirname, "../data/studentDB.json"),
        JSON.stringify(StudentDB)
    ).then(() => response.redirect("/students")
    ).catch(error => console.log(error));
});

// delete student
app.get("/delete", (request, response) => {
    const id = request.query.id;
    StudentDB = StudentDB.filter(stu => stu.id != id);
    fs.writeFile(
        path.resolve(__dirname, "../data/studentDB.json"),
        JSON.stringify(StudentDB)
    ).then(() => response.redirect("/students")
    ).catch(error => console.log(error));
})

// update
app.get("/to-update", (request, response) => {
    const id = request.query.id;
    const student = StudentDB.find(item => item.id == id)
    response.render("update", {student})
})

app.post("/update-student", (request, response) => {
    const student = StudentDB.find(item => item.id == request.body.id)
    student.name = request.body.name,
    student.gender = request.body.gender,
    student.age = request.body.age,
    student.address = request.body.address

    fs.writeFile(
        path.resolve(__dirname, "../data/studentDB.json"),
        JSON.stringify(StudentDB)
    ).then(() => response.redirect("/students")
    ).catch(error => console.log(error));
})

app.listen(8000, () => {
    console.log("Server is up at 8000");
});