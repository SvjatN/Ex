let N = 20;
let arr = [];

nextPrime:
for (var i = 2; i <= N; i++) {

    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    arr.push(i);
} 
arr = arr.filter((item) => N % item == 0  );
console.log(arr.filter((item) => N % item == 0));

