const http = require('http');

const express= require('express');

const app= express();
const PORT = 3000;

app.use('/',(req, res, next)=>{
    console.log('I am in first middleware.');
    next();
});

app.use('/users',(req, res, next)=>{
    console.log('I am in second middleware.');
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
    </head>
    <body>    
        <a href="/">Back to homepage</a> <br>    
        <b>Currently we have following users online.</b>
        <ul>
            <li>Premendra Kumar</li>
            <li>Akhilesh Kumar Barnawal</li>
            <li>Anoj Kumar Barnawal</li>
            <li>Rajeet Mahajan</li>
            <li>Niranjan Kumar Sah</li>
        </ul>        
    </body>
    </html>`);
});

app.use('/',(req, res, next)=>{
    console.log('I am in second middleware.');
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
    </head>
    <body>    
        <h1>Welcome to our World!!</h1>   
        <a href="/users">Check how many users currently login?</a>     
    </body>
    </html>`);
});

app.listen(PORT);