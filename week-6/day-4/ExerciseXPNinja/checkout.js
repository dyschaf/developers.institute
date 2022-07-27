let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
function appendcart() {
  cart.forEach((cart, i) => {
    console.log(cart["name"]);
    const p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = cart["name"] + " " + cart["price"];
  });
}
function totalprice() {
  console.log(cart[0]["price"]);
  total = 0;
  cart.forEach((element) => (total += Number(element["price"])));
  console.log(total);
  const p = document.createElement("p");
  document.body.appendChild(p);
  p.innerText = `tolal amout is ${total}`;
  appendcart;
}
const btn = document.getElementById("btn");
const a = document.createElement("a");
a.setAttribute("href", "checkout.html");
btn.appendChild(a);
a.textContent = "payment";
btn.setAttribute("href", "index.html");
btn.addEventListener("click", button);
function button() {
  localStorage.clear();
  alert("successful");
}
totalprice();
appendcart();
