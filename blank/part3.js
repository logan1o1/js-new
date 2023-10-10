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

console.log(handleObj(bountyDetails));