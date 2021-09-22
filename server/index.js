const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
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
  // const client = await pool.connect();
  // const account = await client.query(
  //   `INSERT INTO account ( username, password, email ) VALUES(
  //   '${req.body.username}', '${req.body.password}',
  //   '${req.body.email}') RETURNING *`
  // );

  console.log(req.body);

  // client.release();

  res.json({
    code: 200,
    message: "Good Postman",
  });
});

app.post("/test", (req, res) => {
  console.log(req.body);
  if (req.body.username == "kaopat") {
    res.json({
      code: 200,
      massage: "success",
    });
  } else {
    res.json({
      code: 404,
      massage: "404 Not Found",
    });
  }
});

app.listen(8080, () => {
  console.log("Connect.....");
});
