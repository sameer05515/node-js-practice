const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const preLoginRoutes = require('./routes/pre-login');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src/public')));

// app.use('/admin', adminRoutes);
app.use(preLoginRoutes);

// app.use(errorController.get404);

app.listen(3001);
