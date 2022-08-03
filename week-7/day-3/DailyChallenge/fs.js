const fs = require("fs");

fs.readFile("RightLeft.txt", "utf8", (err, data) => {
  if (err) console.log(err);

  stepscount(data);
});
function stepscount(steps) {
  const strarray = steps.split("");
  console.log(strarray);
  let count = [];

  let left = 0;
  let right = 0;
  strarray.forEach((item) => {
    if (item === "<") {
      left++;
      if (right - left === -1) {
        let sum = right + left;
        count.push(sum);
      }
    } else if (item === ">") {
      right++;
    }
  });
  console.log("right:" + right);
  console.log("left:" + left);
  console.log("right:" + (right - left));
  console.log("right:" + count[0]);
}
