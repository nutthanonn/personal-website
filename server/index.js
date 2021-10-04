const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
});

app.use(cors());
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const client = await pool.connect();
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    const password = hash;
    client.query(
      `INSERT INTO account ( username, password, email ) VALUES(
      '${username}', '${password}',
      '${email}')`
    );
  });

  console.log(req.body);

  client.release();

  res.json({
    code: 200,
    message: "Good Postman",
  });
});

app.listen(8080, () => {
  console.log("Connect.....");
});
