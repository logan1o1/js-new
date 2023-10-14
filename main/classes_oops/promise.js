// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     setTimeout(() => {
//         // console.log("promise executed");
//         resolve();           // This connects the resolve to the .then
//     }, 1000);
// });

// promiseOne.then(function () {
//     // console.log("promise consumed");
// })


// new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         resolve({name: "lucifer", age:67})
//     }, 1000);
// }).then(function (user) {
//     // console.log(user);
// })


const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({name: "lucifer", age:67})
        }else{
            reject('Error!')
        }
    }, 1000);
})

promiseThree.then(function (user) {
    // console.log(user);
    return user.name;                  
}).then(function (name) {                      // in chaining consuption what happens is the val returned before is used in the next one
    // console.log(name);
}).catch(function (error) {
    // console.log(error);
}).finally(() => console.log('task is resolved or rejected'))


const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({name: "morphius", age:99})
        }else{
            reject('Error!')
        }
    }, 1000);
})

async function consumeFour() {
    try {
        const response = await promiseFour;
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumeFour()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });



fetch('https://api.github.com/users/hiteshchoudhary',{})         // to send anything to the api we write them in the {}
.then((apiResponse)=> {
    return apiResponse.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})