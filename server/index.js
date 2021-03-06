require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pg = require("pg");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(`${__dirname}/../dist/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.search(bodyParser.json());

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log("\033[2J");
  console.log(`Server is running on ${PORT}.`);
});
