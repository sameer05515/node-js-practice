exports.getIndexPage = (req, res, next) => {
    res.render('index', {
      path: '/cart',
      pageTitle: 'Home'
    });
  };
  