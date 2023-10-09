"use strict";
// const accId = 12345;
// let accMail = "lucifer666@gmail.com";
// var accPassword = "123456";
// let accCity ="Cuttack";
// let accState;

// accMail = "Asura@gmail.com";
// accPassword = "0987654";
// accCity = "Venice"

// console.table([accId,accMail,accPassword,accCity]);

// let score = 20

// console.log(typeof score);
// console.log(typeof(score));

// 20 => number
// "abc" => string
// "20qwe" => NaN; but it's type is number
// unidentified => NaN ^
// null => 0: type is object
// true => 1; false => 0

// ******************* Operations ********************

// let val = 10
// let negVal = -val
// // console.log(negVal);

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// console.log("2" == 2);
// console.log("2" === 2);

// non primitive data types (arrays, objects, functions)

//  const myFub =function () {
//     console.log("Fuck you");
// }

// const hotties = ["mila kunis", "emma stones", "emma mayers"];

// let myObj1 = {
//     name: "Lucifer",
//     age: 1000
// };

// console.log(typeof myObj1);

// non primitive data types return object or function as data types

// Stack(primitive) when we change an existing variable it gives us a copy of the original i,e the original's value is not changed
// Heap(non-primitive) when we change an existing variable it gives us a reference of the original i,e original's value changes

// when doin strings use backticks ``

// let name = "Pietro";
// let age = 70
// console.log(`My name is ${name} and my age is ${age}`);

// const gameName = new String("arguments");

// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(typeof gameName);

// const url = "http://fuck%20you.wiki/bhen%20k%20laude";
// console.log(url.replace(/%20/g, '-'));

// const newNum = new Number(134)
// console.log(newNum.toFixed(3));

// let n1 = 34.8556
// console.log(n1.toPrecision(3));


// **********************  Maths ************************

// console.log(Math);

// console.log(Math.floor(Math.random()*10)+1);

let max = 6;
let min = 1;

console.log(Math.floor(Math.random()*(max-min+1)));
