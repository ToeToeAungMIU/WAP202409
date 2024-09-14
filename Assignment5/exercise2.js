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

(async () => {
  try {
    const result = await isPrime(7);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

console.log('end');
