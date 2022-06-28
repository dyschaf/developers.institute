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
let zipcode = parseInt(prompt('zipcode'));
if ( zipcode >= 10000 && !Number.isNaN(zipcode)) {
    console.log('sucsess')
}else{console.log('error')};

// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
input = prompt()
const vowels = ['a', 'i', 'e', 'o','u']
newInput = '';
// input.replace(/a/g,'');
// input.replace(/e/g,'');
// input.replace(/o/g,'');
// input.replace(/i/g,'');
// input.replace(/u/g,'');
for (let i of input){
    if (vowels.indexOf(i) === -1){
        newInput += i;
    }
}
console.log(newInput);
