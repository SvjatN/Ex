let n = 18;
let arr = [];
let sumOfTwins = 0; 
nextPrime:
for (var i = 2; i <= n; i++) {

    for (var j = 2;  j< i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    arr.push(i);
} 

for(let i = 0;i<arr.length; i++){
    if((arr[i+1] - arr[i])===2 ){
       sumOfTwins++;
    }
}
console.log(n);
console.log(sumOfTwins);