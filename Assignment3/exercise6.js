/*Exercise 6: What’s the output in the console? And Draw the execution context as we did in the class. Take a photo or screenshot of what you draw, then upload on github. */


function  foo(x)  {

         let m;

console.log(x, y);

if(x > 5){

var  y  =  5; m = x + y;

} else {

let  z  =  10; m = z;

}

x = m;

console.log(x, y);

}


var  x  =  10;

foo(3);

console.log(x);