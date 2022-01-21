const express = require("express");
const app = express();

// router path
const login = require("./router/login");
const comment = require('./router/comment');
const signIn = require('./router/sign-in');

const port = process.env.PORT || 3000;

// static middleware
app.use(express.static(`${__dirname}/public`));

// view engine set up
app.set("view engine", "pug");
app.set("views", `${__dirname}/view`);

// router
app.use("/", login);
app.use('/', signIn);
app.use('/', comment);

app.listen(port, () => {
    console.log('connected');
});
