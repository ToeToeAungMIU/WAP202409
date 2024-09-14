import http from 'http';
const server = http.createServer();

server.on('request',function(req,res){
    //    res.writeHead(200,'content-type : text/)
        res.end('Hello world');
});

server.listen(3000,()=>console.log('hello world'))