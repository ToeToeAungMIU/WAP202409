/* ****
Implement features below using Express + TypeScript project
CRUD(create, read, update, delete) books: make sure you use the proper URLs and HTTP Methods
A book has properties: id, title, ISBN, publishedDate, author
Use REST Client or other tools to test your REST APIs
Write fetch APIs to test the RESTful APIs in Question 1 
****/
import express from 'express';
import { Request, Response, NextFunction } from "express";
import cors from 'cors';
import bookRouter from '../routes/bookRouter';

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(bookRouter);

app.use((req, res, next) => {
    res.json({success: false, error: 'API NOT Found!'});
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({success: false, error: err.message});
})

app.listen(3000, () => console.log('listening on 3000'));