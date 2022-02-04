const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  res.render('comment');
});

router.get('/next', (req, res) => {
  res.render('next');
});

router.get('/forgot', (req, res) => {
  res.render('forgot');
});

module.exports = router;
