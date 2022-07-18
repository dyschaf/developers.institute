let val;
// let javascriptUsersObject;
const form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
  val = document.querySelector("input").value;
  console.log(val);
  setRequest();
}
// console.log(val);
form.addEventListener("submit", handleForm);
let xhr = new XMLHttpRequest();
const setRequest = function () {
  xhr.open(
    "GET",
    "https://api.giphy.com/v1/gifs/search?q=" +
      val +
      "&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  );
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status !== 200) {
      console.log("error ");
      //   console.log(xhr.response);
      //   let javascriptUsersObject = xhr.response;
    } else {
      console.log(xhr.response);
      let javascriptUsersObject = xhr.response;
      addimg(javascriptUsersObject);
      //   console.log(javascriptUsersObject);
    }
  };
};

const addimg = (javascriptUsersObject) => {
  body = document.body;
  section = document.createElement("section");
  body.appendChild(section);
  section.setAttribute("class", "section");

  btnremove = document.createElement("button");
  btnremove.setAttribute("class", "delete");
  btnremove.innerHTML = "delete";

  img = document.createElement("img");
  img.setAttribute("id", "gif" + val);
  img.setAttribute("class", "delete");

  console.log(javascriptUsersObject.data[0].url);
  img.src = javascriptUsersObject.data[0].url;
  section.appendChild(img);
  section.appendChild(btnremove);
  btnremove.addEventListener("click", btn);
};
const btn = (e) => {
  e.target.previousSibling.remove();
  e.target.remove();
  console.log(e.target);

  // document.getElementsByClassName(val).remove();
};
const deleteall = document.getElementById("remove");
deleteall.addEventListener("click", deleteAll);
const deleteAll = (e) => {
  e.preventDefault();
  let rbtn = document.querySelectorAll(".section");
  //   rbtn.forEach((i, j) => i.remove());
};
