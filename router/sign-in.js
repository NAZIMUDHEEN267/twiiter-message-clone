const express = require('express');

const router = express.Router();

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

router.post('/sign-in', (req, res) => {
  res.render('/');
});

module.exports = router;
