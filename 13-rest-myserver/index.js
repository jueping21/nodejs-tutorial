const express = require("express");
const app = express();

const USERS = [
    { id: 1, name: "Rachyl Derby", age: 20, gender: "male", address: "4986 Abner Road" },
    { id: 2, name: "Driscoll Tammie", age: 21, gender: "male", address: "982 Metz Lane" },
    { id: 3, name: "Bobby Blanche", age: 22, gender: "male", address: "3368 Olen Thomas Drive" },
    { id: 4, name: "Linsay Lynsay", age: 23, gender: "male", address: "2776 Brannon Street" }
];

app.use(express.json());
app.use(express.urlencoded());

// get users
app.get("/user", (request, response) => {
    response.send(USERS);
});

// get single user by user ID 
app.get("/user/:id", (request, response) => {
    const id = request.params.id;
    const user = USERS.find(item => item.id == id);
    response.send({ status: "ok", data: user });
});

// add a user
app.post("/user", (request, response) => {
    const { name, age, gender, address } = request.body;
    const newUser = {
        id: (USERS.length == 0) ? 1 : USERS.at(-1).id + 1,
        name,
        age: +age,
        gender,
        address
    };
    USERS.push(newUser);
    response.send({ status: "ok", data: newUser });
});

// delete user
app.delete("/user/:id", (request, response) => {
    const id = request.params.id;
    for (let i = 0; i < USERS.length; i++) {
        const curr = USERS[i];
        if (curr.id == id) {
            USERS.splice(i, 1)
            response.send({ status: "ok", data: curr });
            return;
        }
    }
    response.status(403).send({ status: "error", data: "user does not exit" });
});

// edit user
app.put("/user", (request, response) => {
    const { id, name, age, gender, address } = request.body;
    const update = USERS.find(item => item.id == id);
    if (update) {
        update.name = name;
        update.age = age;
        update.gender = gender;
        update.address = address;
        response.send({ status: "ok", data: update });
    } else {
        response.status(403).send({ status: "error", data: "user does not exit" });
    }
});

app.listen(8000, () => {
    console.log("Server is up at 8000");
});