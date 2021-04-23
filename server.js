const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: mohammed705ebrahem@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Hey I'm Muhammad Ebrahem Junior Full Stack Web Developer");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>I Wonna Be Senior Full Stack Web Developer</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
