/*
    The global globalThis property contains the global this value, 
    which is usually akin to the global object.
*/

// console.log(globalThis);

// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(process.argv[3]);

/*
    process.exit()
    process.nextTick(callback[, ...args])
*/

/*
    process.nextTick(callback[, ...args])
    process.nextTick() adds callback to the "next tick queue". 

    stack => tick queue => Microtask => Macrotask
*/
setTimeout(() => {
    console.log(1);
})

queueMicrotask(() => {
    console.log(2);
})

process.nextTick(() => {
    console.log(3);
})

console.log(4);