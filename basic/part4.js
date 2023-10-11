// switch case

let month = 6;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        // console.log("jun");
        break;
    case 7:
        console.log("july");
        break;

    default:
        // console.log("defult execution if none of the cases is true");
        break;
}

//falsy values: false, 0, bigInt 0n, -0, "", null, undefined, NaN   => value is defult false

//tuthy values: true, 1, "0", "false", " ", [], {}, function(){}    => value is defult true

// Nullish Coalescing operator (??)  works only on null & undefined

// let val1 = null ?? 20
// let val1 = undefined ?? 20
// let val1 = 4 ?? 20 
let val1 = null ?? 20 ?? 30

// console.log(val1);

//Terneary operator  ?        ******
// condition ? true: false

const age = 40
 age >= 18 ? console.log("u can vote") : console.log("u cant vote");