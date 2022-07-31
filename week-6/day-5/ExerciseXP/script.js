let todo = JSON.parse(localStorage.getItem("todo")) || [];
submit = document.getElementById("submit");
const form = document.forms[0];
console.log(form[0]);
submit.addEventListener("click", storelocally);
// console.log(a);
function storelocally(e) {
  // e.preventdefault();
  const name = form[0].value;
  const description = form[1].value;
  const datestart = form[2].value;
  const dateend = form[3].value;
  console.log(name);
  const task = {
    name: name,
    description: description,
    start: datestart,
    end: dateend,
    isCompleted: false,
    id: `div${todo.length}`,
  };
  console.log(task);
  todo.push(task);
  localStorage.setItem("todo", JSON.stringify(todo));
  a++;
}
