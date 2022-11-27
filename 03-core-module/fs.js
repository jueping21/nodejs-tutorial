const path = require('node:path');
const filePath = path.resolve(__dirname, "./hello.txt");

// https://nodejs.org/api/fs.html#file-system
// const fs = require("node:fs");

// const buffer1 = fs.readFileSync(filePath).toString();
// console.log(buffer1);

// const buffer2 = fs.readFile(filePath, (error, data) => {
//     if (error) {
//         console.log("Unable to read the file.");
//     }
//     console.log(data.toString);
// })

const fs = require("node:fs/promises");

// read file
fs.readFile(filePath).then((value) => {
    console.log("read 1", value);
}).catch(error => {
    console.log("Unable to read the file.");
})

const read = async (filePath) => {
    try {
        const value = await fs.readFile(filePath);
        console.log("read 2", value);
    } catch (error) {
        console.log("Unable to read the file.");
    }
}
read(filePath)

// append file
fs.appendFile(filePath, " Node Node").then((value) => {
    console.log("Appended");
}).catch(error => {
    console.log("Unable to read the file.");
})

// mkdir
fs.mkdir(path.resolve(__dirname, "./hello"), { recursive: true }).then(value => {
    console.log("Folder created");
}).catch(error => {
    console.log("Unable to create the folder.");
    console.log(error);
})

// rmdir
fs.rmdir(path.resolve(__dirname, "./hello")).then(value => {
    console.log("Folder is removed");
}).catch(error => {
    console.log("Unable to remove the folder.");
})

