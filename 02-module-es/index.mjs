
/*
    In node js, the default type is CommonJS Module 
    If we wanna use ES Module,  
        1. use mjs as file extension
        2. edit package.json
*/

/* 
    {abs, max, min} names must be same as math.mjs 
*/
// import {abs, max, min} from "./math.mjs"
// console.log("From math.js file: " + abs(10));
// console.log("From math.js file: " + min(1, 5));
// console.log("From math.js file: " + max(1, 5));

/* 
    change name by using as
*/
// import {abs as indexAbs, max, min} from "./math.mjs"

/*
    import all and name them as math
*/
// import * as math from "./math.mjs" 
// console.log("From math.js file: " + math.abs(10));
// console.log("From math.js file: " + math.min(1, 5));
// console.log("From math.js file: " + math.max(1, 5));

/*
    Default export has no constrains on names 
*/
import fun, {abs, max, min} from "./math.mjs" 
console.log("From math.js file: " + fun(1,1));
console.log("From math.js file: " + abs(10));
console.log("From math.js file: " + min(1, 5));
console.log("From math.js file: " + max(1, 5));