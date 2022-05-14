const path = require('path');

const express = require('express');

const router = express.Router();

// router.get('/',(req, res, next) => {    
//     res.send('<b>Hello</b> <br><br> <a href="/admin/add-product">Add Product</a> <br>');
// })

router.get('/',(req, res, next) => {    
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})

module.exports= router;