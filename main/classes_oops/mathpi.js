const desc = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(desc);

const myObj = {
    item: 'lemon tea',
    prise: 20,
    isAvailable: true
}


const myDesc = Object.getOwnPropertyDescriptor(myObj, 'item')

console.log(myDesc);

Object.defineProperty(myObj, 'item', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myObj, 'item'));

for (let [key, value] of Object.entries(myObj)) {                       // sometimes the objects don't iterate then u have to iterate their entries
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}


// console.log(Math.floor(Math.PI));
// console.log(Math.ceil(Math.PI));

// let piVal = Math.PI
// piVal = 5
// console.log(piVal);