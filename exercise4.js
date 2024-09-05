const strings = ["apple", "banana", "orange", "strawberry", "grape", "blueberry"];

const result = strings.reduce((accum, value) => { 
  if (value.length > 5) {  
    accum.push(value.toUpperCase());
  }
  return accum; 
}, []); 

console.log(result); 
