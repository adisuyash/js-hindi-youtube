const accountId = 144553
let accountEmail = "hitesh@google.com" 
// let variables are block scoped (while) var are globally scoped.
// So it's a better practice to use let variables inside a loop for increasing & decreasing values
// & var variables for accessing global data inside the function

var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])