// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
function compareToTen(res) {
  const myPromise = new Promise((resolve, reject) => {
    if (res >= 10) {
      reject("to high");
    } else {
      resolve(res);
    }
  })
    .then((obj) => console.log(obj))
    .catch((error) => console.log(error));
}
compareToTen(1);
compareToTen(11);
// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

const c = setTimeout(function () {
  const myPromise = new Promise((resolve, reject) => {
    if (5 == 5) {
      resolve("success");
    } else {
      reject("Ooops");
    }
  });
}, 4000);
const p = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);
p.then((res) => {
  console.log(res + "success");
}).catch((err) => {
  console.log(err + "oops");
});
// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const a = Promise.resolve(3).then((result) => console.log(result));
Promise.reject("boo").catch((err) => console.log(err + "oops"));

// a.then((res) => {
//   console.log(res + "success");
// }).catch((err) => {
//   console.log(err + "oops");
// });
// b.then((res) => {
//   console.log(res + "success");
// }).catch((err) => {
//   console.log(err + "oops");
// });
