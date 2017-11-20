let n = 13;
let arr = [];
nextPrime:
for (var i = 2; i <= n; i++) {

    for (var j = 2;  j< i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    arr.push(i);
} 
console.log(arr.join(" "));