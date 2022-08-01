const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(
    `<html>
      <body>
        <h1>This is my first response</h1>
        <h1>This is my second responce</h1>
        <p>This is my third response</p>
      </body>
    </html>`
  );
});

app.listen(3000);
