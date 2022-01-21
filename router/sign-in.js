const express = require('express');
const router = express.Router();

router.get('/sign-in', (req, res) => {
    res.render('sign-in');
});

router.post('/sign-in', (req, res) => {
    res.render('/')
})

module.exports = router;