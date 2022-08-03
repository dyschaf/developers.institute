const fs = require("fs");

fs.writeFile("newfile.txt", "bla bla bla ", function (err) {
  if (err) throw err;
  console.log("done1");
});

fs.appendFile("newfile.txt", "more bla bla bla", (err) => {
  if (err) throw err;
  console.log("done2");
  // done!
});
fs.unlink("newfile.txt", (err) => {
  if (err) throw err;
  console.log("File is deleted.");
});
