const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

// nav in html
// loop probably for each
// create Element
// appen element body
// add atrabut in css flex
// craete a card
// appen card
// add atrabut for css
// img
// add atrabut for css
// name
// add atrabut for css
// email
robots.forEach((i) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const img = document.createElement("img");
  const name = document.createTextNode(i.name);
  const email = document.createTextNode(i.email);
  const section = document.querySelector("#display");
  div.setAttribute("class", "container");
  div.setAttribute("id", `a${i.id}`);
  img.setAttribute("class", `img`);
  img.setAttribute("src", `${i.image}`);
  section.appendChild(div);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(p2);
  p.appendChild(name);
  p2.appendChild(email);
});
// the filter
// addEventListener == array
const input = document.querySelector("#input");
// const domrobo= document.qua
input.addEventListener("input", () =>
  robots.map((filtering, i) =>
    filtering.name.includes(document.getElementById("input").value)
      ? (document.querySelector(`#a${i + 1}`).style.display = "block")
      : (document.querySelector(`#a${i + 1}`).style.display = "none")
  )
);
// ("keyup", inputf);

function inputf(e) {
  robots.filter((find) => {
    // find.e;
    console.log(e.value);
  });
}

//     Exercise # Currying
// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height
// 1. Call the function twice, for products of length 10cm. Weight and Height can differ
// 2. Call the function twice, for products of length 10cm and weight 2 grams,  height can differ

// const volume = (a) => (b) => (c) => {
//   return a * b * c;
// };
// console.log(volume(10)(5)(5));
// console.log(volume(10)(2)(7));
// function Volume(length){
//     return function (weight){
//         return function (height){
//             length*weight*height
//         }
//     }
// }
// const productlenth=volume(10)
// const productwieght=volume(5)(2)
