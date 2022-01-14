const express = require("express");

const Router = express.Router();

// http://localhost:5000/user/update-user
// Register user

Router.put("/update-user/:_id", updateUser);

// http://localhost:5000/user/delete-user
// Register user

Router.delete("/delete-user/:_id", deleteUser);

// http://localhost:5000/user/login-user
// Register user

Router.post("/login-user", userLogin);

// http://localhost:5000/user/current-user
// Register user

Router.get("/current-user", isAuth(), (req, res) => {
  res.json(req.user);
});

module.exports = Router;