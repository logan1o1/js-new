function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username)                           // this make sure we use the context of this func not the prev one
    // SetUsername(this.username)
    // with only SetUsername() we r just referencing it; with .call() we are holding the reference
    this.email = email
    this.password = password
}

const chai = new createUser("lucifer", "lucifer@fb.com", "666")
console.log(chai);