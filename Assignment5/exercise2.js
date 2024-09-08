const isPrime= async (n) => {
    if(n <= 1){
        return {prime : false};
    }

    for(let i=2,s = Math.sqrt(n); i<=s ;i++){
        if(n % i === 0){
            return { prime :false};
        }
    }
    return { prime : true};
};

console.log('start');
isPrime(7)
 .then(console.log)
 .catch(console.error);
console.log('end');