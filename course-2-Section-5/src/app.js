// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser= require('body-parser');

const app = express();
PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}))

const adminRoutes = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);



app.use(adminRoutes);
app.use(shopRoutes);


app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
});


/**This way also express server can be started.*/
// const server = http.createServer(app);
// server.listen(PORT);

app.listen(PORT);

console.log(`Server started on port ${PORT}. Use http://localhost:${PORT} to access application.`);