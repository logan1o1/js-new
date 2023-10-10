// function sayMyName() {
//     console.log("fuck");
//     console.log("you");
//     console.log("bitch");
// }

// sayMyName() => execution of the function;  sayMyName => reference of the function;

// function add(num1,num2) {
//     num1+num2
// }
function add(num1,num2) {         // => parameters (num1,num2)
    return num1+num2
}

const result = add(2,"s")                         // => arguments (1,2)

// console.log(result);

// so what we get afte a function executes is the return value the has

function userLogin(userName) {
    if (userName === undefined) {
        return "please enter a user name"
    }
    else{
        return `${userName} has just logged in`
    }
}

// console.log(userLogin("lucifer"));

function shopingCard(...num1) {                               // spread & rest operator in this case it's rest
    return num1
}

// console.log(shopingCard(200,5000,400,950));

//objects in func
const bountyDetails = {
    name: "Josef Mengle",
    bounty: 5000000
}

function handleObj(anyobject) {
    return `The name is ${anyobject.name} and the bounty is ${anyobject.bounty}`
}

// console.log(handleObj(bountyDetails));

//*********************************** Scopes ***************************


// Whenever within the { } => this is called block scope and outside it is called global scope what happens is that id u declare something inside a block scope it can't be used outside the block scope but if u declare a global scope it can be used inside a block scope

let a = 10

if (true) {
    let a = 5
    let b = 20
    // console.log("block scope: ", a);
}

// console.log("global scope: ", a);
// console.log(b);        // it gives error cause it's declared in block scope and used outside of it


// console.log(addOne(3));
function addOne(num) {
    return num +1
}

const addTwo = function (num) {          // in this case it doesn't work because the variable is declared at line 73 so it can't  
    return num+2                          // be executed before declaration the term is hoisting
}
// console.log(addTwo(4));

// ++++++++++++++++++++++++++ Arrow func and this. keyword +++++++++++++++++++++++

const user = {
    name: "lucifer",
    age: 45,
    loginMessage: function () {
        console.log(`welcome ${this.name}`);              // here this means everything in the scope of user
    }
}

// user.loginMessage()
// this. doesnt work the same way in functions as it does in objects 

const increment = (num) => {              // this is explicit arrow function
    return num+1                          // u have to use return keyword if u r using { }
};
// console.log(increment(4));

const incrementTwo = (num) => (num+2);       // this is implicit arrow function u dont have to use return here
// console.log(incrementTwo(4));



//Immediately Invoked Function Expressions (IIFE):  the syntax is (function(){}1)(2) 1 for the func & 2 for the call. It's use to maintain a clean global scope in industrial use

(function func()  {
    //named IIFE
    console.log(`its a bloody function`);
})();                                         // we need a ; because the next one won't run if the prev one hasent ended

((name) => {
    //simple IIFE
    console.log(`its another bloody function ${name}`);
})("unnamed")