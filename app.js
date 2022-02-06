const express = require('express');
require('dotenv').config();
const fs = require('fs');

const app = express();
const path = require('path');

// for delete copy css directory
fs.rmdir(path.join(`${__dirname}/public/build/css/copy`), { recursive: true }, (err) => console.log(err));

// router path
const login = require('./router/login');
const comment = require('./router/comment');
const signIn = require('./router/sign-in');

const port = process.env.PORT;

// static middleware
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));

// view engine set up
app.set('view engine', 'pug');
app.set('views', `${__dirname}/view`);

// router
app.use('/', login);
app.use('/', signIn);
app.use('/', comment);

app.listen(port, () => {
  console.log('connected');
});
