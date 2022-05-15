/**core libraries*/
const path = require('path');

/**3rd party libraries*/
const express = require('express');

/**local libraries*/
const router = express.Router();
const rootDir= require('../util/path');

const products = [];

router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','admin.html'));
    res.render('admin',{pageTitle: 'Add Product', path: '/add-product'})
});

router.post('/products',(req, res, next) => {
    // console.log(req.body);
    products.push({title: req.body.product})
    res.redirect('/');
})

// module.exports= router;
exports.routes = router;
exports.products = products;