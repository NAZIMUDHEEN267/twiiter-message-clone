const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('comment');
});

router.post('/', (req, res) => {
  res.render('comment');
  console.log(req.body);
})

module.exports = router;
