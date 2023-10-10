//************************ Array *****************

// const myArr = [1,2,3,4,5,6]
// const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr);

//methods
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()


// console.log(myArr);
// console.log(myArr.join()); //converts array into string

// const newArr = myArr.slice(1,4);
// console.log("A: ", myArr);
// console.log(newArr);

// const newArr2 = myArr.splice(1,3)
// console.log("B: ", myArr);
// console.log(newArr2);

// const marvelHeros = ["wolverine", "moon knight", "daredevil", "X-23"]
// const dcHeros = ["batman", "cyborg", "wonder woman", "superman"]

// const allHeros = marvelHeros.concat(dcHeros)
// const allHeros = [...marvelHeros,...dcHeros]

// console.log(allHeros);

const wierdArr = [1,2,3,4,5,[6,7,8],9,10,[4,5,6,[7,8,9],10],11]
const normalArr = wierdArr.flat(Infinity)

// console.log(normalArr);

// console.log(Array.isArray("lucifer"));
// console.log(Array.from("lucifer")); // of too


//************************** Objects ***************************

// Object.create()  => singleton; made in the form of a constructor

// object literals

const mySym = Symbol("key1")

const myObj = {
    name: "david",
    "full name": "David GOGGINS",
    [mySym]: "myKey1",
    age: 500,
    city: "Agra",
    email: "lucifer.m@google.com"
}

// console.log(myObj[mySym]);

// Object.freeze(myObj)

// myObj.myFun = function fun() {
//     console.log("don't do saste nashe");
// }
// console.log(myObj.myFun());

// myObj.greeting = function greet() {
//     console.log(`hello ${this["full name"]}, =>stay hard motherfucker`);
// }
// console.log(myObj.greeting());

const tinderUser = new Object();

tinderUser.id = "1bc23"
tinderUser.name = "Pietro"
tinderUser.isLoggedin = true

// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// hasOwnProperty

// console.log(tinderUser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);

//destructuring

const course = {
    courseName: "js",
    coursePrice: 2000,
    courseInstructor: "hitesh choudhry"
}

const {courseInstructor: instructor} = course // extract courseInstuctor from course

console.log(instructor);

// {
//     Object body         JSON format
// }

// [
//     {},
//     {}                JSON Array format
// ]