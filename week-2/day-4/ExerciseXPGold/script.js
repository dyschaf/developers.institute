// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.
a=prompt('')
function checkEmpty(a){
    if (a == "") {
        console.log(true)
}else{console.log(false)}
}
checkEmpty(a)
// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.
// console.log(abbrevName("Robin Singh")); --> "Robin S."
nameString=prompt('name')
const fullName = nameString.split(' '); 
console.log(fullName[0]+ ' '+fullName[1].charAt(0)+'.')

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :
// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.
function swap(){
let words= 'the niight and shinine armer'
element=words.split(' ');
return element.map(item=>{
    return item.charAt(0).toLowerCase() + item.substring(1).toUpperCase();
})
  }

console.log(swap()) 
