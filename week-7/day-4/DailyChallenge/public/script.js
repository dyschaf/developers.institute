const sendLogin = () => {
  const username = req.body.username; //username provided
  const password = req.body.password; //password provided

  fetch("/login_fail", {
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
  saveUser(
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.username,
    req.body.password
  );

  fetch("/signup_err", {
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
