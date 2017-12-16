let n = 18;
let sumOfTwins = 0;
let prevPrime = 2;

nextPrime:
for (let i = 3; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    if(i - prevPrime === 2){
        sumOfTwins++;
    }
    prevPrime = i;
}

console.log(sumOfTwins);