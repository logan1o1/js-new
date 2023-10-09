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

console.log(Array.isArray("lucifer"));
console.log(Array.from("lucifer")); // of too


//************************** Objects ***************************