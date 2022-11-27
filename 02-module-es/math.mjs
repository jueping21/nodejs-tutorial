export let abs = function (num) {
    return num >= 0 ? num : -num;
};

export let max = function (a, b) {
    return a < b ? b : a;
};

export let min = function (a, b) {
    return a < b ? a : b;
};

// set default export value
export default function sum(a, b){
    return a + b;
}