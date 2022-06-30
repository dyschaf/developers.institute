// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
const infoAboutMe = function(){
    console.log('Dovid', '24', 'blue')
}

// console.log(infoAboutMe)
infoAboutMe()
const infoAboutPerson = function (personName, personAge, personFavoriteColor){
    return `your name is ${personName} you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
}

// console.log(a("Josh", '12', "yellow"));
console.log(infoAboutPerson("David", '45', "blue"));
console.log(infoAboutPerson("Josh", '12', "yellow"));
// infoAboutMe(dovid, 24 ,blue)

// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, ask John for the amount of the bill.
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
// Call the calculateTip() function.
function calculateTip(){
        let bill = Number(prompt('how much was the bill'))
    newBill="";
    if (bill < 50 ){
        newBill=bill * .20 + bill;
        // console.log(newBill)
    }else if (bill >= 50 && bill < 200){
        newBill=bill * .15 + bill
    }else{
        newBill=bill * 10 +bill;
    }console.log(newBill)
}

calculateTip();
// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23
// At the end, console.log the sum of all numbers that are divisible by 23.
function inDivisible(){
    let sum=0;
    let list =[];
    for(i=0; i<= 500; i++){
        if(i % 23 == 0){
            // list = []
            // console.log(list)
            list.push(i) ;
            sum +=i;     
    }
    }
console.log(list);
console.log(sum);
}
inDivisible();
// Exercise 4 : Shopping List
// Instructions
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ['banana', 'orange', 'apple' ]
function myBill(){
    let checkOut =0;
    for (item of shoppingList){
        if(stock[item]>0 ){
        checkOut += prices[item];
        }
 }  
  return checkOut
}
console.log(myBill())

// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
// // Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// // 4. To illustrate:
// // After you created the function, invoke it like this:
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
function changeEnough(itemPrice, amountOfChange){
    let amount =amountOfChange[0]*0.25;
    let amount1 =amountOfChange[1]*0.15;
    let amount2 = amountOfChange[2]*0.05;
    let amount3 =amountOfChange[3]*0.01;
    if (amount+ amount1 + amount2+ amount3>=itemPrice){
        return true;
    }else {return false;}
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]))
// console.log(changeEnough)
// Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
function hotelCost(){
    // numOfDays= paraseInt(prompt('how many days?'));
    while (true){
        numOfDays= (prompt('how many days?'));
        if (!isNaN(numOfDays)) {
            break;
        }
}return numOfDays*140;
}
hotelCost()
function planeRideCost(){
let destanation={
'London' : 183,
'Paris' : 220,
'else': 300 }
    while (true){
        // whereTo = (prompt('where to?'));
        if (whereTo===destanation) {
            break;
        }
}
}
planeRideCost()
function rentalCarCost(){
    let dayCost=40
    let numOfDays;
    while (true){
    numOfDays= paraseInt(prompt('how many days?'));
    if (!isNaN(numOfDays)) {
        break;
    }
}}
    if(numOfDays <= 10){
    // return dayCost + numOfDays;

    }else if(numOfDays >= 10){
        // return dayCost + numOfDays *0.95;
    }

// console.log(rentalCarCost())
function totalVacationCost(){}

