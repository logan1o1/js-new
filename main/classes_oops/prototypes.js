// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "webs",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prototyp = function(){
    console.log(`prototyp is present in all objects`);
}

Array.prototype.heyBro = function(){
    console.log(`Lucifer says hello`);
}

// heroPower.prototyp()
// myHeros.prototyp()
// myHeros.heyBro()
// heroPower.heyBro()

// inheritance

const User = {
    name: "lucifer",
    email: "lucifer@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)           // mtlb TeachingSupport can inherit properties of Teachr

let anotherUsername = "kuchV     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"lucifer".trueLength()
"iceTea".trueLength()