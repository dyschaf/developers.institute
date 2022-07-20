// // Exercise Game - The word game
// // You need to create 4 functions, each of them return a promises
// // 1. The 1st function, receives 2 famous persons name from the user -
// // if the names are not a string -> reject
// // else - resolve with the name of the 2 ppl
// const name= async()=>{
//     const input1=prompt('famous people')
//     const input2=prompt('famous people')
//         if(typeof(input1) !==''||typeof(input2) !==''){
//             throw new Error("not a string")
//         }else{
//             return [input1,input2]
//         }
// }
// // 2. The 2nd function, receives a noun
// // if the noun is less than 3 letters - reject
// // else - resolve with the noun
// const noun=async()=>{
//     const input=prompt('noun')
//         if(input.length < 3){
//             throw new Error("needs more then 3 letters")
//         }else{
//             return input
//         }
//     }
// // 3. The 3rd function, receives a city
// // if the city doesn't start with an uppercase letter -> reject
// // else - resolve with the city name
// const city=async()=>{
//     const input=prompt('city uppercase the first letter')
//         if(input.charAt(0) = input.charAt(0).toUpperCase ){
//             throw new Error("not a string")
//         }else{
//             return input
//         }
//     }
// // 4. The 4st function, receives a verb (finishing with "ing")
// //  if it doesn't end with "ing" -> reject (use the endWith string method)
// // else resolve with the verb
// const verb=async()=>{
//     const input=prompt('noun')
//         if(!input.endsWith('ing')){
//             throw new Error("not a verb")
//         }else{
//             return input
//         }
//     }
// // 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// // Ex: "Beyonce is playing football with Barack Obama in Paris"
// // ---
// const getSent=async()=>{
//     console.log("in the async") //2
//     try{
// 	let name = await name()
//     let noun = await noun()
//     let city = await city()
//     let verb = await verb()
// 	return `${famousPeople[0]} is ${verb} ${noun} with ${famousPeople[1]} in ${city}` ;

// }catch(e){console.log(e.message)}
// }

//     //result : 'Javascript DONE'
//     // console.log("hello")
// 	// console.log(`${famousPeople[0]} is ${verb} ${noun} with ${famousPeople[1]} in ${city}` )
// // 6. Part II. BONUS
// // Instead of waiting for the promises to come back resolved, look at Promise.all method
// // --> running the promises in Parallel
// // --> check the difference of performance with performance.now()
// getSent()
// // .then(res=>console.log(res))
// 1st Challenge
// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]
async function test() {
  const a = Promise.resolve(3);
  const b = 42;
  const c = new Promise((resolve, reject) => setTimeout(resolve, 3000, "foo"));

  let d = Promise.all([a, b, c]).then((re) => console.log(re));
}
test();

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()
document.querySelector("#run").addEventListener("click", async (e) => {
  console.log("hello");
  const inputcity1 = document.getElementById("floc").value;
  const inputcity2 = document.getElementById("sloc").value;
  city1 = Number(inputcity1.split(" "));
  city2 = Number(inputcity2.split(" "));
  console.log(city1);
  try {
    const apifetch = await Promise.all([
      fetch(
        `https://api.sunrise-sunset.org/json?lat=${city1[0]}&lng=${city1[1]}&date=today`
      ).then((res) => res.json()),
      fetch(
        `https://api.sunrise-sunset.org/json?lat=${city2[0]}&lng=${city2[1]}&date=today`
      ).then((res) => res.json()),
    ]);
    apifetch.forEach(({ results: { sunrise } }, i) => {
      const div1 = document.querySelector("#container1");
      div1.innerHTML += `${i + 1}: ${sunrise}<br>`;
    });
  } catch (error) {
    console.log(error.message);
  }
});

// let abc = Promise.all([api1(), api2(), run()]);
// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242
