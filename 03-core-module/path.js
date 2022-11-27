// https://nodejs.org/api/path.html#path

const path = require('node:path');

// The path.resolve() method resolves a sequence of paths 
// or path segments into an absolute path.
const absolute = __dirname;
console.log(path.resolve(absolute, "./path.js"));