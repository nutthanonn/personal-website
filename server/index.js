const express = require("express");
const app = express();
const route = require("./routes/myRouter");

app.use(route);

app.listen(8000);
