const fs = require("fs");

const calculus = {
    title: "Calculus: The Classic Edition",
    author: "Earl W. Swokowski",
    isbn10: "0534924921"
}

const linearAlgebra = {
    title: "Linear Algebra Done Right",
    author: "Sheldon Axler",
    isbn10: "0387982582"
}

// In JSON, values must be one of the following data types:
// string, number, object, array, boolean, and null.
const books = [calculus];
const data = JSON.stringify(books);
fs.writeFileSync("bookList.json", data);

const buffer = fs.readFileSync("bookList.json");
const bookList = JSON.parse(buffer.toString());

for(let book of bookList){
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("ISBN-10: " + book.isbn10);
    console.log();
}   
