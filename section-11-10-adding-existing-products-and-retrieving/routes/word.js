const path = require('path');

const express = require('express');

const wordController = require('../controllers/word');

const router = express.Router();

// /word/words => GET
router.get('/word/words', wordController.getAllWord);

// /word/add-word => POST
router.post('/word/words', wordController.postAddWord)


module.exports = router;