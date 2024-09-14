let numbers =[1,2,3];
numbers.unshift(0);//push 0 at index 0
numbers.forEach(x => {
    console.log(`unshifted values is ${x}`)
});

numbers.shift(); // pop the value from index 0

numbers.forEach(x=>{
    console.log(`Shifted value is ${x}`);
});


