const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const requestHandler = (req, res) => {
    if (req.method === 'GET' && req.url === '/') {        
        const filePath = path.join(__dirname, 'signup.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else if (req.method === 'POST' && req.url === '/signup') { 
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const inputData = querystring.parse(body);
            const { username, password } = inputData;

            const dataToSave = `Username: ${username}, Password: ${password}\n`;
            fs.appendFile(path.join(__dirname, 'database.txt'), dataToSave, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Internal Server Error');
                }
               
                res.writeHead(302, { 'Location': '/success' });
                res.end();
            });
        });
    } else if (req.method === 'GET' && req.url === '/success') {       
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Sign up successfully</h1>');
    } else {       
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
};

const server = http.createServer(requestHandler);
server.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});
