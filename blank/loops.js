for (let i = 1; i <= 10; i++) {
    // console.log(`table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} times ${j} = ${i*j}`);        
    }    
}


//while
//declare
// while (condition) {
//     //statement
//     //increment}


//do-while
//declare
// do {
//     //atatement
//     //increment
// } while (condition);



// array specific

//for-of

const myArr = [1,2,3,4,5,6,7]
for (const arr of myArr) {
    if (arr == 5) {
        // console.log("we'll be skiping that");
        continue
    }else{
        // console.log(`value is ${arr}`);
    }
}


// Maps

const map = new Map();

map.set('OD', 'Odisha')
map.set('UP', 'Uttar Pradesh')
map.set('PU', 'Pune')
map.set('OD', 'Odisha')              // it doesnt print cause maps ar known to hold unique values

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} : ${value}`);
}

//objects are not itretable this way

//to iterate objects we use for-in loop
//for-in

const myObj = {
    name:"lucifer",
    age: 34,
    spouse: "Lilith",
    recidence: "hell"
}

for (const key in myObj) {
    // console.log(`${key}: ${myObj[key]}`);
}

// for array
for (const key in myArr) {
    // console.log(`${key}: ${myArr[key]}`);
}


// foreach
myArr.forEach( (val, index) => {
    // console.log(`${index}: ${val}`);
})

// function print(val) {
//     console.log(val);
// }
// myArr.forEach(print)                    // we shouldn't execute it we should only give it's reference


const recidences = [
    {
        recidentName: "Lucifer",
        recidentAge: 1000,
        status: "single"
    },
    {
        recidentName: "Azazel",
        recidentAge: 400,
        status: "single"
    },
    {
        recidentName: "Baphomet",
        recidentAge: 1000,
        status: "single"
    }
]

recidences.forEach((item) => {
    console.log(item.recidentName);
})