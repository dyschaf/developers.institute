const sendLogin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const root = document.getElementById("root");
      root.innerText = data.msg;
    })
    .catch((e) => {
      console.log(e);
    });
};

const sendPostData = () => {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const userName = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/register.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, userName, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const root = document.getElementById("root");
      root.innerText = data.msg;
    })
    .catch((e) => {
      console.log(e);
    });
};
