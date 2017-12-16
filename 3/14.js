let n = 5;
let m = 21;
let arr = [];

nextPrime:
for (var i = n; i <= m; i++) {

    for (var j = 2;  j< i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    
    arr.push(i);
    
} 
console.log(arr);


