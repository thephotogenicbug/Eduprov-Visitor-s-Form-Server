const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("api is running...");
});

module.exports = app;
