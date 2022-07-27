let products = [
  {
    id: 0,
    name: "Deluxe Bicycle",
    url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
    price: 499.98,
  },
  {
    id: 1,
    name: "Super Deluxe bagpack",
    url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
    price: 134.99,
  },
  {
    id: 2,
    name: "Super Duper Scooter",
    url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
    price: 1090.95,
  },
  {
    id: 3,
    name: "Smartphone",
    url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
    price: 399.99,
  },
];
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const form = document.createElement("form");
form.setAttribute("id", `form`);
form.setAttribute("action", "checkout.html");
document.body.appendChild(form);
const appendShoppinglist = () => {
  products.forEach((element, i) => {
    const div = document.createElement("div");
    div.setAttribute("id", `div${element.id}`);
    div.addEventListener("click", pushtocart);
    const img = document.createElement("img");
    img.setAttribute("id", `img${element.id}`);
    const name = document.createElement("p");
    name.setAttribute("id", `name${element.id}`);
    const price = document.createElement("p");
    price.setAttribute("id", `price${element.id}`);
    // const button = document.createElement("button");
    // button.setAttribute("id", `btn${element.id}`);
    form.appendChild(div);
    div.appendChild(img);
    img.setAttribute("src", element.url);
    div.appendChild(name);
    name.textContent = element.name;
    div.appendChild(price);
    price.textContent = element.price;
    // div.appendChild(button);
    // button.textContent = "Add To Cart";
  });
  const checkoutbtn = document.createElement("button");
  checkoutbtn.setAttribute("id", "co");
  const a = document.createElement("a");

  form.appendChild(checkoutbtn);
  a.setAttribute("href", "checkout.html");
  checkoutbtn.appendChild(a);
  a.textContent = "Check Out";
};
appendShoppinglist();

document.getElementById(`co`).addEventListener("click", nextpage);
function pushtocart(e) {
  console.log(cart);
  console.log(e.target.parentElement.children[1].childNodes[0].nodeValue);
  const name1 = e.target.parentElement.children[1].childNodes[0].nodeValue;
  const price1 = e.target.parentElement.children[2].childNodes[0].nodeValue;
  cart.push({
    name: name1,
    price: price1,
  });
  console.log(cart);
}

function nextpage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
