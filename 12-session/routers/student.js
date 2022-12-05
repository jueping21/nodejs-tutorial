const express = require("express");
const path = require("path");
const fs = require("fs/promises");
let StudentDB = require("../data/studentDB.json");

// A router object is an isolated instance of middleware and routes
const router = express.Router();


// auth user by using session
router.use((request, response, next) => {
    if (!request.session.loginUser) {
        console.log("No auth");
        response.redirect("/");
        return;
    }
    next();
})

// List all students
router.get("/list", (request, response) => {
    response.render("students", { StudentDB, username: request.session.loginUser});
})

// Add student
router.post("/add", (request, response, next) => {
    const id = (StudentDB.length == 0) ? 1 : StudentDB.at(-1).id + 1;
    const newStudent = {
        id,
        name: request.body.name,
        gender: request.body.gender,
        age: request.body.age,
        address: request.body.address
    }
    StudentDB.push(newStudent);
    next();
});

// Delete student
router.get("/delete", (request, response, next) => {
    const id = request.query.id;
    StudentDB = StudentDB.filter(stu => stu.id != id);
    next();
})

// Update student
router.get("/to-update", (request, response) => {
    const id = request.query.id;
    const student = StudentDB.find(item => item.id == id)
    response.render("update", { student })
})

router.post("/update", (request, response, next) => {
    const student = StudentDB.find(item => item.id == request.body.id)
    student.name = request.body.name,
        student.gender = request.body.gender,
        student.age = request.body.age,
        student.address = request.body.address
    next();
})

router.use((request, response) => {
    fs.writeFile(
        path.resolve(__dirname, "../data/studentDB.json"),
        JSON.stringify(StudentDB)
    ).then(() => response.redirect("/student/list")
    ).catch(error => console.log(error));
})

module.exports = router;