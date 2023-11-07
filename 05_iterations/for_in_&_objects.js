const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// console.log(Object.keys(myObject)) // For keys of Object
// console.log(Object.values(myObject)) // For values of Object

for (const key in myObject) { 
    // console.log(`${key} shortcut is for ${myObject[key]}`); // Objects has key:values as it's keys & values in for in loop
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]); // Array has indices as it's keys
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// for in loop uses KEYS while for of loop uses ITEM