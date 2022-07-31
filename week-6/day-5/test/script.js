// # Review on Javascript
// ​
// #### Basics
// ​
// 1. How to access the second element of the array `
let arr = [3, 7, 10];
arr[1];
// 2. For the code below, what does `arrNums.splice(2, 0)` return?

//     ```javascript
//     let arrNums = [1, 2, 3, 4, 5];
//     ```
// ​I think it will return [2,1,2,3,4,5]
// [1, 2, 3, 4, 5];
// 3. What is the result of the following code :
// ​
//     ```javascript
//     const oneTwoThree = [1, 2, 3]
//     const sevenEightNine = [7, 8, 9]

//     const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
//     console.log(all)
//     ```
// [4, 5, 6, 1, 2, 3 ,7, 8, 9]
// 4. What does the following code print to the console?
// ​
//    ```javascript
//    let golf = {
//      type: "sport",
//      clubs: {
//        high_end: "taylor made",
//        low_end: "rusty basement clubs"
//      }
//    }
//    golf.clubs.high_end = "callaway";
//    console.log(golf.clubs.high_end);
//    ```
// 'callaway'
// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
// ​
//     ```javascript
//     const x = function(a, b){
//        return a*b;
//     }
//     ```
// ​yes, arrow functions and you call it like x(1,1)
// 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
// ​
//     ```javascript
//     function x() {
//     	a = 5;
//     ```
// no it not a global Variable it's in a function has its own local storage
// ​
// #### Functions
// ​
// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
// ​
//     ```javascript
//     function sayHello() {
//        return "Hello, ";
//     }
//     function greeting(helloMessage, name) {
//       console.log(helloMessage() + name);
//     }
//     greeting(sayHello, "JavaScript!");
//     ```
// I never tried but it make sence that I could work but very messy reminds me of functions in array
// 8. Transform this function into an arrow function
// ​
//       ```javascript
//       function sum(num1, num2){
//           return num1 + num2
//       }

//       sum(40,2)
//       sum(42,0)
//       console.log("the answer to everything is", sum(42,0))
//       ```
// ​const sum = (num1,num2)=>num1+num2
// 9. What does the following code print to the console? Explain the process and concept behind it
// ​
//      ```javascript
//      function foo () {
//        function bar() {
//          return "Poppin' bottles";
//        }
//        return bar();
//      }
//      console.log(foo());
//      ```
// Poppin' bottles
// #### DOM
// ​
// 10. Which of the following events will you add in the `addEventListener()`method?
//       ☐ click
//       ☐ onclick
// ​click
// 11. Does the `addEventListener()` method allow you to add many events to the same element?
// ​
//     ```javascript
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`
//     ```
// ​yes
// 12. DOM exercise
//
//       1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
// ​x.addEventListener("click", func2)
// const func2 =() =>document.body.appendChild.document.createElement('p').textContent="New Paragraph")
//       2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
// p.addEventListener("mouseover", func1 )
// const func1=(e)=>event.target.style.color = "red");
// #### Array Methods
// ​
// 14. What is the value of `passed` in the following code?
// ​
//      ```javascript
//      let marks = [67, 60, 89, 90, 67, 42];

//      let passed = marks.every(function(m) {
//         return m >= 50;
//      });
//      ```
// false
// 15. What does the following code log?
// ​
//    ```javascript
//    let nums = [10, 50, 88];

//    let bignums = nums.filter(function(n) {
//       return n > 10;
//    });
//    [50,88]
//    console.log(bignums);
//    ```
// ​
// *16. Use a javascript array method to square the value of every element in the array.
// ​please go over
//    ```javascript
//    const input = [ 1, 2, 3, 4, 5 ];
//    //code
//    console.log(input) // [ 1, 4, 9, 16, 25]
//    ```
//  ​ input.maps(e=> e*e)
// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones.
// ​
//      ```javascript
//      const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
//      //code
//      console.log(total) //42
//      ```
// secondInput.​reduce((acc, cur)=>acc+cur,0)
// *17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
// ​
//      ```javascript
//   const input = 'George Raymond Richard Martin';
//      //code
//      console.log(initials)//'GRRM'
//      ```
// input.split(' ').map(name=>name[0]).join()
// #### Object and Classes
// ​
// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
// ​object is hold by the Reference it holds to much info to just be a value
// 19. What will be printed in the console
// ​
//     ```javascript
//     function Item(name, price) {
//        this.name = name;
//        this.price = price;
//        this.displayInfo = function() {
//        console.log(this.name + " is for $ " + this.price)
//        }
//     }
// ​
//     const cake = new Item("Chocolate Cake", 10);
//     cake.displayInfo();
//     ```
// ​Chocolate Cake is for $ 10
// 20. Refactor this code using Classes
// ​class item {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }
// #### Promises
// ​
// 21. What will be the output and why ? What will be the state of the promise ?
// ​
//     ```javascript
//     Promise.resolve('Success!')
//       .then(data => {
//         return data.toUpperCase()
//       })
//       .then(data => {
//         console.log(data)
//       })
//     ```
//  resoled ​SUCCESESS!
// 22. What log will be made by the following code, after 2 seconds?
// ​
//     ```javascript
//     const p = new Promise(function(resolve, reject) {
//        setTimeout(function() {
//           resolve("OK");
//        }, 2000);
//     });

//     p.then().then(function(data) {
//        console.log(data);
//     });
//     ```
// ​OK
// 23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
// ​
//     ```javascript
//     async function f() {
//       let result = 'first!';
//       let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('done!'), 1000);
//       });

//       result = await promise;

//       console.log(result);
//     }

//     f();
//     ```
// ​done
// 24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
//     1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
//     2. Make sure to use try and catch
// async function api(){
//     try {
//         const api = await fetch('https://catfact.ninja/fact');
//         if (api.status !== 200) {
//           throw new Error('fact problem')
//         } else {
//           const res = await api.json()
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
// function display() {
const { fact } = api;
//   const p = document.createElement("p");
//   const text = documnet.createTextNode(api["fact"]);
//   p.appendChild(text);
//   document.body.appendChild(p);
// }
