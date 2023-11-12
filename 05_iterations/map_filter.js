const myNumbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]

// console.log(myNumbers.map( (num) => { return num + 10}))

const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

// above is chaining done, which means result of one operation passes to  the next
// it is similar to myNumbers `.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)`

// console.log(newNums);


// Map function ( map() ) is completely different from the Map Object

// let test = new Map();
// test.set('IN', 'India')
// console.log(typeof test)