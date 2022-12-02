setTimeout(() => {
    console.log("2 seconds are up");
}, 2000);

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtitude: 0,
//         };
//         return data;
//     }, 2000);
// };

// In javascript, without passing values, func can run with no syntax error for this.
// geocode()

// Output are "undefined" and "2 seconds are up". While console.log() runs
// in the stack, geocode() does not execute yet. So, geocode() does not retrun
// anything.
//
// let data = geocode("los angeles");
// console.log(data);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0,
        };
        callback(data);
    }, 1000);
};

// starts
// ends
// { latitude: 0, longtitude: 0 }
// 2 seconds are up
//
// console.log("starts");

// geocode("los angeles", (data) => {
//     console.log(data);
// });

// console.log("ends");


