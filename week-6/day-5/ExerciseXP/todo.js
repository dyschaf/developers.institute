let todo = JSON.parse(localStorage.getItem("todo"));
let item;
a = 0;
for (let i = 0; i < todo.length; i++) {
  // if(i=)
  console.log(todo[i]["start"].sort);
}
todo.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(todo);
function list() {
  for (let item of todo) {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", item.id);
    const input = document.createElement("input");
    div.appendChild(input);
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", `check`);

    const ul = document.createElement("ul");
    div.appendChild(ul);
    const li = document.createElement("li");
    li.textContent = item.name;
    ul.appendChild(li);
    const li2 = document.createElement("li");
    li2.textContent = item.start;
    ul.appendChild(li2);
    console.log(item.name);
    const li3 = document.createElement("li");
    li3.textContent =
      handleDate(item.end, ul) + " days remaining to complete the task.";
    ul.appendChild(li3);
    const li4 = document.createElement("li");
    li4.setAttribute("id", `li4${a}`);
    li4.textContent = "description: " + item.description;
    ul.appendChild(li4);
    li4.style.display = "none";
    const remove = document.createElement("button");
    div.appendChild(remove);
    remove.setAttribute("class", `remove`);
    remove.textContent = "remove task";
    appendDone(item.isCompleted, input, div);

    a++;
  }
}
list();
console.log(item);
function handleDate(date, div) {
  let todayDate = new Date();
  let endDate = new Date(date);
  let seconds = 24 * 60 * 60 * 1000;
  let daysLeft = Math.floor((endDate - todayDate) / seconds);
  if (daysLeft < 0) {
    daysLeft = 0;
    // console.log(e);
    div.style.color = "red";
  }
  return daysLeft;
}
function appendDescription(e) {
  // console.log(e);
  e.target.parentElement.children[3].style.display = "block";
}
for (let a = 0; a < todo.length; a++) {
  const divholder = document.getElementsByTagName(`ul`);
  divholder[a].addEventListener("click", appendDescription);
}
for (let a = 0; a < todo.length; a++) {
  const check = document.getElementsByClassName("check");
  check[a].addEventListener("change", displayDone);
}
for (let a = 0; a < todo.length; a++) {
  const x = document.getElementsByClassName("remove");
  x[a].addEventListener("click", removetask);
}
function appendDone(item, input, div, e) {
  const check = document.getElementsByClassName("check");
  // todo.map((item, i) =>
  item === true
    ? (input.checked = true) + (div.style.color = "green")
    : (input.checked = false) + (div.style.color = "black");

  console.log(check[0].checked);
}

function displayDone(e) {
  if (this.checked) {
    todo = todo.map((item) =>
      item.id == e.target.parentElement.id
        ? { ...item, isCompleted: true }
        : { ...item }
    );
    localstorage(todo);
    console.log(todo[0].isCompleted);
    e.target.parentElement.style.color = "green";
  } else {
    todo = todo.map((item) =>
      item.id == e.target.parentElement.id
        ? { ...item, isCompleted: false }
        : { ...item }
    );
    localstorage(todo);
    console.log(todo[0].isCompleted);
    e.target.parentElement.style.color = "black";
  }
}
function removetask(e) {
  console.log(e.target.parentElement.id);
  e.target.parentElement.remove();
  const index = todo.findIndex((i) => i.id == e.target.parentElement.id);
  todo.splice(index, 1);
  localstorage(todo);
  // e.target.parentElement.remove();
  // console.log(e.target.parentElement);
}
console.log(todo);
function localstorage() {
  localStorage.setItem("todo", JSON.stringify(todo));
}
// todo = localStorage.setItem("todo", JSON.stringify(todo));
