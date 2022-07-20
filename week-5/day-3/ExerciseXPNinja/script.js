// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// const check = function (input) {
//   let working = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof input === "string") {
//         console.log(input.toUpperCase());
//         // let salary=1000
//         resolve(input.toUpperCase());
//       } else {
//         console.log("reject");
//         reject("not error" + input);
//       }
//     }, 5000);
//     return working;
//   });
// };
// console.log(working);
// working
//   .then()
//   .catch((error) => console.log("in the catch", error));
//     //the parameter gift is the result of the first promise
//     console.log("in the first then");
//     throw new Error("problem");
//     return salary + 300;
//   })
//   // .then(restgift => {
//   // 	//the parameter restgift is the result of the promise returned by the first then
//   // 	console.log("in the first then")
//   // 	return salary - 10
//   // })
//   .catch((error) => console.log("in the catch", error));
// // catch will be called if there is an error in the process and the promises are rejected

// # Fetch
// # Exercise : use fetch
// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// For example:
// you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy"
// and display it on the page
// # Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"
const btn = document.getElementById("btn");
const container = document.getElementById("container");
btn.addEventListener("click", run);
function run() {
  fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Wrong response");
      } else {
        console.log(res);
        return res.json();
      }
    })
    .then((obj) => console.log(obj) + gifs(obj))
    .catch((error) => console.log(error));
}

function gifs(obj) {
  fetch(
    `https://api.giphy.com/v1/gifs/random?tag=${obj}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  )
    .then((re) => {
      if (re.status !== 200) {
        throw new Error("Wrong response");
      } else {
        console.log(re);
        return re.json();
      }
    })
    .then((obj) => console.log(obj) + appendData(obj))
    .catch((error) => console.log(error));
}

function appendData(obj) {
  const containerImg = document.createElement("div");
  const imggif = document.createElement("img");
  imggif.style.width = "30%";
  //   const btnDeleteGif = document.createElement("button");
  //   const text = document.createTextNode("Delete the gif");
  //   btnDeleteGif.appendChild(text);
  //   btnDeleteGif.addEventListener("click", deleteGif);

  // obj destructuring
  const {
    data: {
      images: {
        original: { url },
      },
    },
  } = obj;
  imggif.setAttribute("src", url);
  containerImg.appendChild(imggif);
  container.appendChild(containerImg);
}

// when the server is processing - meaning looking for the data
function inProgress() {
  console.log("processing");
}

// when the request couldn't be made because of network error
function errorNetwork() {
  console.log("error");
}
