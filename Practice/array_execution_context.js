 
 
 
function foo(x, y) {
    if (y) {
        var a = x;
    } else {
        let b = y;
    }
    console.log(a, b, c);
    bar(a, b);
    var c = y;
    console.log(a, b, c);
 }
  
 const bar = function (x, y) {
    b = c;
    console.log(a, b, c);
    a = y;
    c = x;
 }
 var a = 1;
 let b = function () {
    console.log(3);
 }
 let c = 2;
 foo(a, b, c);
 console.log(a, b, c);