const http = require('http');

PORT=3000;

const server = http.createServer((req, res) => {
    route = req.url;
    method= req.method;
    res.setHeader('Content-Type','text/html')
    if (route === '/' && method==='GET') {        
        res.write(`<form action="/greet" method="post">
        <input type="text" name="message">
        <button type="submit">Submit</button>
    </form>`);
        return res.end();
    } else if (route === '/users' && method==='GET') {
        res.write(`<ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
        <li>User 5</li>
        </ul>`);
        return res.end();
    }else if(route === '/greet' && method==='POST' ){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })

        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString().split('=')[1];
            console.log(parsedBody);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        })

    }else{
        res.write(`Page not found : <b>${route}</b> !!`);
        return res.end();
    }


})

server.listen(PORT);
console.log(`Server started on port ${PORT}. Use http://localhost:${PORT} to access application.`);