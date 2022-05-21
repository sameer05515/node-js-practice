const Word = require('../models/word');

exports.getAllWord = (req, res, next) => {
    res.render('word/words', {
      pageTitle: 'Add Word',
      path: '/admin/words',
      message: 'All words will be shown soon!!!',
      editing: false
    });
  };

  exports.postAddWord = (req, res, next) => {
      console.log(req.body)
    res.render('word/words', {
        pageTitle: 'Add Word',
        path: '/admin/words',
        message: 'Post word!!!',
        editing: false
      });
  };

