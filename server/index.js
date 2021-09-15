const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../../Test.db");
db.run("PRAGMA busy_timeout = 6000");
db.configure("busyTimeout", 6000);

app.post("/login", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  let sql = `INSERT INTO Hiuser(username, password) VALUES("${req.body.username}", "${req.body.password}")`;
  db.run(sql, (err) => {
    if (err) {
      return console.error(err);
    }
  });

  res.json({
    name: "HelloWorld",
    pass: "Hello123",
  });
  db.close();
});

app.listen(8080, () => {
  console.log("Run....");
});
