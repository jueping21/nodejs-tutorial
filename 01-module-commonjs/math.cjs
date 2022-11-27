const abs = function (num) {
    return num >= 0 ? num : -num;
};

const max = function (a, b) {
    return a < b ? b : a;
};

const min = function (a, b) {
    return a < b ? a : b;
};

// console.log(this === exports);  // true
// console.log(module.exports === exports); // true

// Method 1:
exports.abs = abs;
exports.max = max;
exports.min = min;

// Method 2:
// module.exports = {
//     abs: abs,
//     max: max,
//     min: min
// }