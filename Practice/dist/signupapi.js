"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
http_1.default.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        fs_1.default.createReadStream('signup.html').pipe(res);
    }
    else if (url === '/signup') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end(body);
        });
    }
    else {
        res.end('Page not found 404');
    }
}).listen(3000);
