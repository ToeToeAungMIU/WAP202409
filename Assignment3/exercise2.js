/* Exercise 2:  Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20. */
function sum(arr) {   
    return arr.reduce((accum, value) => {
      if (value > 20) {
        return accum + value; 
      }
      return accum; 
    }, 0); 
  }
  
 
  const numbers = [10, 25, 30, 45, 90, 5];
  const result = sum(numbers);
  
  console.log(result); 
  