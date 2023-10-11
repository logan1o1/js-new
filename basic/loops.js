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
    // console.log(item.recidentName);
})
// regardless of wheter u write return or not, foreach doesn't return anything that's why we use filter

const newArr = [1,2,3,4,5,6,7,8,9,10]

const exNewArr = newArr.filter((num) => num >= 5)                            //only use return whe {} are used
// console.log(exNewArr);

// const newNum = newArr.map((val) => {return val ** 2})                       //only use return whe {} are used
const newNum = newArr.map((val) => {return val ** 2})
                     .map((val) => val/2 )
                     .filter((val) => val >15)                                // map chaining

// console.log(newNum);


// ---------------------------- Reduce function ---------------------------
// it's easier to do array operations 

const arrnew = [1,2,3,4,5]

const numnew = arrnew.reduce((preval, curval) => (preval + curval), 0)       // preval is initialized at the end as 0

console.log(numnew);