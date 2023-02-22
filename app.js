const express = require("express");
const app = express();
app.use(express.json());
const MiddleWare = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You can not access this page because you are bellow 18");
  } else {
    next();
  }
};
app.use(MiddleWare);
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.get("/users", (req, res) => {
  res.send("Welcome to users page");
});
app.listen(5000, () => {
  console.log("Server is running...");
});
