let n = 1;
console.log(isPrime(n));
function isPrime(n){
    if(n===1) return false;

    for(let i = 2;i<n;i++){
        if(n% i == 0){
            return false;
        }        
    }

    return true;
}

