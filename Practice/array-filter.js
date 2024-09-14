let numbers =[1,2,3,4,5];
let even = numbers.filter(number => number%2 === 0);

even.forEach(x => {
    console.log(`Even number is ${x}`);
})