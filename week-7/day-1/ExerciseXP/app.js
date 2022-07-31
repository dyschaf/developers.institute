const axios = require("axios").default;
async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  getUser,
};
