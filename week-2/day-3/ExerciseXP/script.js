//  Exercise 1 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// Write code that gives the index of “Foo”. Why does it return -1 ?
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[3] = 'Jason';
people.push = 'Dovid';
console.log(people.indexOf('Mary'));
console.log(people.slice(1));
console.log(people.indexOf('Foo'));
let last = people.length -1;
console.log(last)
// for(i = 0; i < 4; i++){
//     console.log(people[i])
// };
for(i = 0; i < people.length; i++){
    console.log(people[i])

};
do{people} while(people = people[3]);
//  Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// // Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// // Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// // Hint : create an array of suffixes to do the Bonus
let color = ['blue', 'green', 'red', 'pink', 'yellow']
let num = 0;
// for(counter = 0; counter > counter.length; counter ++){
    // console.log(`My #${counter} choise is ${color[counter]}`)
// };
for (let col of color)
console.log(`My #${num+= 1} choise is ${col}`);
// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// do{userNumber = Number(prompt('enter a number'))} while(userNumber >=9));
// Exercise 4 : Building Management
// Instructions:
// Review About Objects
// Copy and paste the above object to your Javascript file.
// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building.numberOfFloors);
// for(let floor in building)
console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor)
// let fruits = ["apple", "banana", "pear", "melon"];
// for (i = 0; i < fruits.length; i++){
//      fruits[i]= fruits[i]+'s';
// }
// console.log( fruits[i]= fruits[i]+'s')


// for(let counter = 0; counter > 15; counter++){
//     if (counter % 2){
//         console.log('even')
//     }else{console.log('odd')}
// };