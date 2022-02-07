const express = require('express');

const router = express.Router();

router.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

router.post('/sign-up', (req, res) => {
  res.render('sign-up');
  console.log(req.body);
});

module.exports = router;
