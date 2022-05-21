const path = require('path');

const express = require('express');

const wordController = require('../controllers/words');

const router = express.Router();

router.get('/words', wordController.getIndex);

router.get('/words/new', wordController.getNewWord);

router.post('/words/add-word', wordController.postAddWord)

router.post('/words/edit-word', wordController.postEditWord)

router.get('/words/edit-word/:wordId', wordController.getEditWord)

router.post('/words/delete-word', wordController.postDeleteWord)

module.exports = router;