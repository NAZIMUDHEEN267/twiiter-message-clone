const express = require("express");
const app = express();
const router = require("./router/router");

const port = process.env.PORT || 3000;

// static middleware
app.use(express.static(`${__dirname}/public`));

// view engine set up
app.set("view engine", "pug");
app.set("views", `${__dirname}/view`);

// router
app.use("/", router);

// route
app
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    res.render("comment");
  });

app.listen(port);
