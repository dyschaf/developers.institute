// Exercise 1:
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.sort();
console.log(fruits)
delete fruits[0];
fruits.push = 'Kiwi';
fruits.splice(1, 1);
fruits.reverse();
console.log(fruits);

// Exercise 2:
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// let 
console.log(moreFruits[1][1][0]);