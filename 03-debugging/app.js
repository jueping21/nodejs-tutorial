// 1. node inspect [projectname.js] [optional args]
// 2. go to chrome://inspect/#devices

class Test{
    #a
    constructor(){
        this.#a = 10;
        console.log("constructor " + this.#a);
    }

    m1(){
        this.#a = 111;
        debugger
        console.log("change to " + this.#a);
    }

    m2(){
        console.log("print " + this.#a);
        return this.#a;
    }
}

let test = new Test();
test.m1();
test.m2();