const addtocart = () => {
  const amount = document.getElementById("amount").value;
  const item = document.getElementById("item").value;

  fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item, amount }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const root = document.getElementById("root");
      root.innerText = data;
    })
    .catch((e) => {
      console.log(e);
    });
};
