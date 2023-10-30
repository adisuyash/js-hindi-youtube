const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // here `this` refers to the complete object `user` !, and hence console.log(this) prints the whole object `user`
    }

}

// user.welcomeMessage()
// user.welcomeMessage = "Hi folks wassup !" // a key, declared as a function can be over wrote !
// user.username = "sam"
// console.log(user.welcomeMessage)
// console.log(user)

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// `this` can only be used with an object,  not with a function as it returns `undefined` in the above case

const chai =  () => {
    let username = "hitesh"
    // console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // this is `Implicit Return` as it is in one line & there's no need to mention `return (num1+num2)`

/*
If we use { } braces, then we have to mention return keyword but not with ( ) braces
In REACTjs, { } are not used, ( ) are used & hence return keyword is avoided


-------SUMMARY------
1.
function(){

}

2.
() => {
    return...
}

3. `Highly used in React `
() => (
    // no need to return
)

*/

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()