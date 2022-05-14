const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','admin.html'));
});

router.post('/products',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports= router;