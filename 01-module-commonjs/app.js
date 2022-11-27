// import core module
const fs = require("fs");

// In node js, the default type is CommonJS Module 
// CommonJS Module 
const math = require("./math.cjs");

// node automatically adds .js for us if the file extension is not found 
// find js first => then find json => .node
const note = require("./notes");

// where do exports, module, required __filename __dirname come from?
// Every node file is replace into a function before running
// (function(exports, module, required __filename __dirname){
//      statements...
// }  
// console.log(arguments);

const res = note();
console.log("From note.js file: " + res);

const abs = math.abs(10);
console.log("From math.js file: " + abs);

const min = math.min(1, 5);
console.log("From math.js file: " + min);

const max = math.max(1, 5);
console.log("From math.js file: " + max);