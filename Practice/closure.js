const x = 10;
function foo() {
    const y = 20;
    return function (z) {
        console.log(x + y + z);
    }
}
let result = foo();
console.log(result);
// result(30);
// foo()(30);