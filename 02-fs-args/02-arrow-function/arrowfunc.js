// const square = function(x){
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;
 
// console.log(square(3));

const myEvent = {
    name: "Birthday Party",
    
    // printing: Guest list for undefined. 
    // Why?: Arrow function does not bind their own this value, and this 
    // always points to the outer scope.
    //
    // printGuestList:() => {
    //     console.log("Guest list for " + this.name);
    // }

    guestList:["Tim","Mike","Andrew"],

    printGuestList(){
        console.log("Guest list for " + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        })
    }
}

myEvent.printGuestList();

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}
console.log(tasks.getTasksToDo())
