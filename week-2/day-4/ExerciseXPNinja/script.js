// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
console.log(Math.round(Math.random() * 100));
// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
let a='abcdef';
function capitalize(a){
    let newA='';
    let arr=[a]+[' ']+[a];
console.log(arr)
    for(let i=0; i<arr.lenght ; i++){
        if(i % 2 === 0){
            newA+=arr[i].toUpperCase()
            console.log(newA)
        }else{newA+=arr[i].toLowerCase()
    console.log(newA)
        }
    }console.log(newA)
console.log(capitalize(a))
}
//     // a='abcdef';
//     // element=(' ');
//     let string=' ';
//     let string2=' ';
//     let finalSting=' ';
//     for(let i=0; i < a.length; i++){
//         if(i % 2 === 0){
//             string+=i.toLowerCase();
//         }else{
//             string+=i.toUpperCase()}
           

//     finalSting=string +' '+ string2;
//     return finalSting.toString();
// }
// }
    console.log(capitalize(a)) ;