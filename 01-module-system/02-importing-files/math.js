const abs = function (num) {
    return num >= 0 ? num : -num;
};

const max = function (a, b) {
    return a < b ? b : a;
};

const min = function (a, b) {
    return a < b ? a : b;
};

module.exports.abs = abs;
module.exports.max = max;
module.exports.min = min;

