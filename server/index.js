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

app.post("/login", async (req, res) => {
  const client = await pool.connect();
  const account = await client.query(
    `INSERT INTO account (username, password) VALUES('${req.body.username}', '${req.body.password}') RETURNING *`
  );

  console.log(account.rows);

  client.release();

  res.json({
    code: 200,
    message: "success",
  });
});

app.listen(8080, () => {
  console.log("connected");
});
