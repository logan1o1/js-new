class User {
    constructor(username){
        this.username = username;
    }

    logMe() {
        console.log(`the user is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, age, email){
        super(username)                          // it takes the context of the parent class
        this.age = age;
        this.email = email;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}


const courseOne = new Teacher('Pietro', 45, 'pietro@email.com');
// to run it u have to call the funcs

courseOne.addCourse()
courseOne.logMe()

const userTwo = new Teacher("Arnold")

userTwo.logMe()

console.log(userTwo instanceof User);