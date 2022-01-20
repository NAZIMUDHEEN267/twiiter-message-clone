const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.json('nachu', 'another nachu');
});


module.exports = router;
