import { v4 as uuidv4 } from 'uuid';
let books: Book[] = [];
/*Implement features below using Express + TypeScript project
CRUD(create, read, update, delete) books: make sure you use the proper URLs and HTTP Methods
A book has properties: id, title, ISBN, publishedDate, author
Use REST Client or other tools to test your REST APIs
Write fetch APIs to test the RESTful APIs in Question 1 */

export default class Book {
    constructor(public id: string, public title: string,public ISBN: string, public publishedDate: string, public description: string){
    }

    save(){
        this.id =  uuidv4();
        console.log("Book ID ",this.id )
        books.push(this);
        return this;
    }

    update(){
        const index = books.findIndex(p => p.id === this.id);
        if(index > -1) {
            books[index] = this;
        } else {
            throw new Error(`No Book found with id: ${this.id}`);
        }
    }

    static fetchAll(){
        return books;
    }

    static fetchById(id: string){
        const book = books.find(p => p.id === id);
        if(book){
            return book;
        } else {
            throw new Error(`No Book found with id: ${id}`);
        }
    }

    static deleteById(id: string){
        const index = books.findIndex(p => p.id === id);
        if(index > -1) {
           books = books.filter(p => p.id !== id);
        } else {
            throw new Error(`No Book found with id: ${id}`);
        }
    }
}