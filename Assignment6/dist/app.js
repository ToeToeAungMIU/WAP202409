"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./router/users"));
const products_1 = __importDefault(require("./router/products"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded());
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});
app.use('/users', users_1.default);
app.use('/products', products_1.default);
app.use((req, res, next) => {
    res.status(404).sendFile('404.html', { root: 'views' });
});
app.use((err, req, res, next) => {
    res.status(500).sendFile('500.html', { root: 'views' });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
