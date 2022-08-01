fetchapi();

async function fetchapi() {
  try {
    const fetch = await fetch("https://localhost:3002/");
    const data = await fetch.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
