const Word = require('../models/words');


exports.getIndex = (req, res, next) => {
    Word.fetchAll()
      .then(words => {
        res.render('word/index', {
          allWords: words,
          pageTitle: 'Word-List',
          path: '/words'
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  exports.getNewWord = (req, res, next) => {
      res.render('word/edit-word',{
        pageTitle: 'New Word',
        path: '/words',
        editing: false
      })
  }


  exports.postAddWord=(req, res, next) => {
  const word = req.body.word;
  const partOfSpeeches = req.body.partOfSpeeches;
  const description = req.body.description;
  const wordObj = new Word(
    word,
    partOfSpeeches,
    description,
    null
  );
  wordObj
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Word');
      res.redirect('/words');
    })
    .catch(err => {
      console.log(err);
    });
  }

  exports.postEditWord=(req, res, next) => {
  const wordId= req.body.wordId;
  const word = req.body.word;
  const partOfSpeeches = req.body.partOfSpeeches;
  const description = req.body.description;
  const wordObj = new Word(
    word,
    partOfSpeeches,
    description,
    wordId
  );
  wordObj
    .save()
    .then(result => {
      // console.log(result);
      console.log('Updated Word');
      res.redirect('/words');
    })
    .catch(err => {
      console.log(err);
    });
  }

  exports.getEditWord = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.wordId;
    Word.findById(prodId)
      // Product.findById(prodId)
      .then(product => {
        if (!product) {
          return res.redirect('/words');
        }
        res.render('word/edit-word', {
          pageTitle: 'Edit Product',
          path: '/words',
          editing: editMode,
          product: product
        });
      })
      .catch(err => console.log(err));
  };

  exports.postDeleteWord = (req, res, next) => {
    const prodId = req.body.wordId;
    Word.deleteById(prodId)
      .then(() => {
        console.log('DESTROYED WORD');
        res.redirect('/words');
      })
      .catch(err => console.log(err));
  };