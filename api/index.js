const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  return res.send("Hello world");
});

app.get("/api/rotem", (req, res) => {
  return res.json({
    rotem: "noob",
  });
});
app.get("/api/rotem/test", (req, res) => {
  return res.json({
    rotem: "noob",
  });
});
// app.listen(3030);

module.exports = app;
