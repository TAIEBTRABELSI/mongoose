const express = require("express");
const user = require("./routes/user");
const app = express();
const port = 6000;
app.listen(port, (erreur) => {
  erreur
    ? console.log("Server connexion failed", erreur)
    : console.log("Server connexion done");
    const express = require("express");
const app = express();
const user = require("./routes/user");
const port = 5000;
app.listen(port, (erreur) => {
  erreur
    ? console.log("Server connexion failed", erreur)
    : console.log("Server connexion done");
}
,Router.get("/current-user", isAuth(), (req, res) => {
  res.json(req.user);

  Router.post("/login-user", userLogin);
  Router.put("/update-user/:_id", updateUser);
  Router.delete("/delete-user/:_id", deleteUser);
}),
});
