let button = document.querySelector("#button");
let names = document.querySelector("#name");
let height = document.querySelector("#height");
let gender = document.querySelector("#gender");
let birthYear = document.querySelector("#birthYear");
let homeWorld = document.querySelector("#homeWorld");

async function getapi() {
  updateWithLoading();
  const randomNumber = Math.floor(Math.random() * 88 + 1);
  const apiUrl = "https://swapi.dev/api/people/" + randomNumber + "/";
  try {
    const api = await fetch(apiUrl);
    const json = await api.json();
    // updateWithLoading();
    const homeworld = await fetch(json.homeworld);
    //   console.log(homeWorldJson);
    const homeworldJson = await homeworld.json();
    append(json, homeworldJson.name);
  } catch (error) {
    console.log(error);
    updateInfoWithError();
  }
}
function append(res, hwRes) {
  const apiName = res.name;
  const apiHeight = res.height;
  const apiGender = res.gender;
  const apiBirthYear = res.birth_year;
  const apiHomeWorld = hwRes;
  names.textContent = apiName;
  height.textContent = "Height: " + apiHeight;
  gender.textContent = "Gender: " + apiGender;
  birthYear.textContent = "Birth Year: " + apiBirthYear;
  homeWorld.textContent = "Home World: " + apiHomeWorld;
  console.log(apiName + apiHeight + apiGender + apiBirthYear + apiHomeWorld);
}

function updateWithLoading() {
  //   Icon link: https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons
  names.innerHTML =
    '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  height.innerText = "";
  gender.innerText = "";
  birthYear.innerText = "";
  homeWorld.innerText = "";
}
function updateInfoWithError() {
  names.innerText = "Oh No! That person isnt available.";
  height.innerText = "";
  gender.innerText = "";
  birthYear.innerText = "";
  homeWorld.innerText = "";
}
button.addEventListener("click", getapi);
