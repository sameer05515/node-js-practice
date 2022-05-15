// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const { engine } = require('express-handlebars');

const app = express();
// app.engine('hbs', engine({
//     extname: "hbs",
//     defaultLayout: false,
//     layoutsDir: "views/layouts/"
// }));

app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const adminData = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);

PORT = 3000;

app.use(adminData.routes);
app.use(shopRoutes);


app.use((req, res, next) => {
    // res.sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404')
});


/**This way also express server can be started.*/
// const server = http.createServer(app);
// server.listen(PORT);

app.listen(PORT);

console.log(`Server started on port ${PORT}. Use http://localhost:${PORT} to access application.`);