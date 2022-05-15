const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: true }));

const users = [];

app.get('/', (req, res, next) => {
    res.render('add-user', { 
        pageTitle: 'Add User', 
        path: '/add-product' ,
        users: users})
});

app.post('/add-user', (req, res, next) => {
    users.push({ userName: req.body.userName });  
    res.redirect('/users');
});

app.get('/users',(req,res,next)=>{
    res.render('users', { 
        pageTitle: 'All users list', 
        path: '/add-product' ,
        users: users})
})

app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page not found', path: '/' })
});

app.listen(PORT);