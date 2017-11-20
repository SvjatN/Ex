let n = 5;
let m = 10;
let arr = [];

nextPrime:
for (var i = 2; i <= m; i++) {

    for (var j = 2;  j< i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    if(i>=n && i<=m){
    arr.push(i);
    }
} 
console.log(arr);


