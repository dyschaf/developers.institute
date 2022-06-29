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
 
 }   return checkOut
}
console.log(myBill())
