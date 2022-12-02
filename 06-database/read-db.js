const mongodb = require("mongodb");

const mongoClient  = mongodb.MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbName = "CRUD";

mongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect the database"); 
    }

    const db = client.db("CRUD");
    db.collection("users").findOne({name: "test-user"}, (error, result) => {
        if(error){
            return console.log(error);
        }
        return console.log("db2", result);
    })

    db.collection("users").find({name: "test-user"}).toArray((error, users) => {
        console.log(users);
    })

    db.collection("users").find({name: "test-user"}).count((error, users) => {
        console.log(users);
    })
})