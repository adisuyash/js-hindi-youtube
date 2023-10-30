// Immediately Invoked Function Expressions (IIFE)
// IFFE are used to remove the pollution caused by the Global Scoped variables

(function chai(){
    // named IIFE : as function has a name
    console.log(`DB CONNECTED`);
})(); // IFFE causes error when two functions are invoked continuously so it's necessary to add a semmicolon `;`

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/* for example,

function addOne(params) {
    return params+1
}
addOne(8) // It's immediately called/invoked 
*/