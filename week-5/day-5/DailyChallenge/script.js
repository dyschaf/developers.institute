async function getlist() {
  try {
    const api = await fetch(
      `https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes`
    );
    console.log(api);
    if (api.status !== 200) {
      console.log(error);
    } else {
      const codes = await api.json();
      console.log(codes);
      console.log(codes.supported_codes);
      appendlist(codes);
    }
  } catch (error) {
    console.log(error);
  }
}
getlist();
function appendlist(codes) {
  const code = codes;
  console.log(code.supported_codes[0][0]);
  const list1 = document.getElementById("list1");
  const list2 = document.getElementById("list2");

  const output = "";

  code.supported_codes.forEach((list) => {
    console.log(list[0]);
    const output1 = document.createElement("option");
    const output2 = document.createElement("option");
    output1.innerHTML = list[0];
    output2.innerHTML = list[0];
    list1.appendChild(output1);
    list2.appendChild(output2);
  });
}
const submit = document.getElementById("submit");
submit.addEventListener("click", callapi);
async function callapi(e) {
  e.preventDefault();
  const number = document.getElementById("number").value;
  const list1 = document.getElementById("list1").value;
  const list2 = document.getElementById("list2").value;
  const text = document.getElementById("res");
  console.log(number);
  try {
    const api = await fetch(
      `https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${list1}/${list2}/${number}`
    );
    if (api.status !== 200) {
      console.log(error);
    } else {
      const res = await api.json();
      console.log(res.conversion_rate);
      text.innerHTML = res.conversion_result;
    }
  } catch (error) {
    console.log(error);
  }
}

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
