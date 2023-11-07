/*
let country = ["India", "US", "China"];

for (const x of country) { // "FOR OF" loop iterates through the data of array
    console.log(x);
}

for (const x in country) { // "FOR IN" loop iterates through the indices of array 
    console.log(x);
}

country.forEach((x) => {
    console.log(x) // "FOR EACH" loop iterates through each element of the array with a SYNTAX different from the above two loop
});
*/

const me = {
    name: "adi",
    age:20
};

const friend = me;
friend.age=27;
console.log('Friend',friend);
console.log('Me',me);
