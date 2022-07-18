let xhr = new XMLHttpRequest();
const setRequest = (function () {
  xhr.open(
    "GET",
    "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  );
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status !== 200) {
      console.log("error");
    } else {
      console.log(xhr.response);
      let javascriptUsersObject = xhr.response;
    }
    // console.log(javascriptUsersObject);
  };
})();
// const loadData = () => {
//   if (xhr.status !== 200) {
//     console.log("error");
//   } else {
//     let javascriptUsersObject = JSON.parse(xhr.response);
//   }
//   console.log(javascriptUsersObject);
// };
