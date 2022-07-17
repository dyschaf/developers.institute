const json = document.getElementById("form");
// const json = document.querySelector("#form > input[type=submit]:nth-child(9)");
json.addEventListener("submit", form);
function form(e) {
  e.preventDefault();
  const input = new FormData(e.target);
  const inputObj = Object.fromEntries(input.entries());
  const inputJSON = JSON.stringify(inputObj);
  //   console.log(JSON.stringify(myform));
  console.log(inputJSON);
  const h1 = document.createElement("h1");
  document.body.appendChild(h1);
  const text = document.createTextNode(inputJSON);
  h1.appendChild(text);
}
