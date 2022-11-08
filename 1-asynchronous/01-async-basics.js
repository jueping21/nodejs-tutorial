// Asynchronous operation
let isTrue = function (value, callback) {
    if (value === true) {
        callback(null, "value is True");
    } else {
        callback(new Error("Value is False"));
    }
};

let callback = function(error, value) {
    if (error) {
        return console.log(error);
    } 
    console.log(value);
}

isTrue(true, callback);

console.log(__filename);
console.log(__dirname);