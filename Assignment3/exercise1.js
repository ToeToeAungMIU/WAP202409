/*Exercise 1:  Practice Objects (declaration, properties, methods, etc) and functions by yourself. */
/* Object declaration */
const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 30,
    printData: function () {
    console.log(`${this.firstname} ${this.lastname} ${this.age}`);
    }
    }

    //console.log(person.firstname,person.lastname,,person.age);

    person.printData();

    const book ={
        title : 'JavaScript For Impatient Programmers',
        author : 'Dr. Axel Rauschmayer',
        published : 2022,
        getSummary : function (){
            return `${this.title} by ${this.author} and published in ${this.published}.` 
        }
    }

    console.log(book.getSummary());

/* Square Function */
function square(number){
    return number * number;
}

console.log(`Square value is ${square(6)}`)


function calculateCircleArea(radius){
    const pi = 3.14159;
    return pi * radius * radius;
}

console.log(`The area of the circle is ${calculateCircleArea(10)} `)

function greetUser(username){
    return `Hi, ${username}! How are you?`;
}

console.log(greetUser('Alice'))

