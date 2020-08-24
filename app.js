const express = require("express");
const app = express();
const ejs = require("ejs");

const indexRoute = require("./routes/index");

// PORT
const port = process.env.PORT ? process.env.PORT : 3000;

// EJS setup
app.set("view engine", "ejs");

// Public folder
app.use(express.static("./public"));

// using routes
app.use(indexRoute);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
