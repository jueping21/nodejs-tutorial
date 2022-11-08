const util = require("./utils.js");
const note = require("./notes.js");
const math = require("./math.js");

const sum = util(10, 20);
const res = note();

console.log("From util.js file: " + sum);
console.log("From note.js file: " + res);

const abs = math.abs(10);
console.log("From math.js file: " + abs);

const min = math.min(1, 5);
console.log("From math.js file: " + min);

const max = math.max(1, 5);
console.log("From math.js file: " + max);


console.log(module);