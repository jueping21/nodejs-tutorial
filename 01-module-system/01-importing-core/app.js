const fs = require("fs");

// Write data to notes.txt synchronously.
let data = "Node.js is an open-source"
fs.writeFileSync("notes.txt", data);

// Append more data to notes.txt synchronously.
let more = ", cross-platform JavaScript runtime environment."
fs.appendFileSync("notes.txt", more);