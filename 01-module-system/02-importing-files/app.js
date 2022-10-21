const utils = require("./utils.js");
const notes = require("./notes.js");


const sum = utils(10 , 20);
const res = notes();

console.log("From utils.js file: " + sum);
console.log("From notes.js file: " + res);