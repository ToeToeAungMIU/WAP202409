import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        fs.createReadStream('signup.html').pipe(res);
    } else if (url === '/signup') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(body);
            res.end(body);
        });
        
    } else {
        res.end('Page not found 404');
    }
}).listen(3000);