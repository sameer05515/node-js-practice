const path = require('path');

const express = require('express');

const preLoginController = require('../controllers/pre-login');

const router = express.Router();

router.get('/',preLoginController.getIndexPage)

module.exports = router;