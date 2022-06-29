// for (let i = 1; i < 7; i++){
//     let star='';
//     star += '*';
//     console.log(star.repeat(i));
//     // console.log(star.repeat(2));
//     // console.log(star.repeat(3));
//     // console.log(star.repeat(4));
//     // console.log(star.repeat(5));
//     // console.log(star.repeat(6));

// }
let star='*';
for (let i = 1; i < 7; i++){
    let star='';
    // console.log(i)
    for (let j = 0; j < 7 ; j++){
        star += '*';
    }
        console.log(star);
        }

// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google
const numbers = [5,0,9,1,7,4,2,6,3,8];
// sum =0;
// for (i in numbers){
// // numbers.toString();
// // numbers.join("+");
// console.log(sum+=numbers[i])}
// num = numbers.toString();
let=temp;
for (let i=0; i<number.length -1; i++){
    // temp=number[i];
    for(let j=1; j<number.length; i++){
        if (number[i];<number[j]){
            temp=number[j]
            number[j]=number
            number[i]=temp
        }
    }
}
console.log(number)



