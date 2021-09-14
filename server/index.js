const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Nutthanon");
});

app.listen(8080, () => {
  console.log("Start...");
});
