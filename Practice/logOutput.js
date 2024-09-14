function log(e){
    console.log(e);
}

let arr = [1,2,3];
console.log("start");

setTimeout(() => arr.forEach(log))

console.log("end");