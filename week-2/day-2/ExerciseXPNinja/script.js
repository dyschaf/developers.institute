// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY
let john = 1997
let jonny = 1984

// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions
// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length
let zipcode = prompt('zipcode');
if (zipcode.length === 5 && zipcode != (/^[0-9.,]+$/)) {
    console.log('sucsess')
}else{console.log('error')};
