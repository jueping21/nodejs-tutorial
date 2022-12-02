const mongodb = require("mongodb");

// Creates a new MongoClient instance
const mongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "CRUD";

// MongoClient.connect(url, options, callback)
mongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=>{
    if(error){
        return console.log("Unable to connect the database"); 
    }
    console.log("connected");
    const db = client.db(databaseName);
    
    // v
    db.collection('users').insertOne({
        name: "test-user",
        age:22   
    }, (error, result) => {
        if(error){
            return console.log("Unable to insert user");
        }
        return console.log(result.ops);
    });
});
