let n = 30000;
let sum = 0;
let arr = [];

for (let i = 1; i <= n; i++) {
    if (isPerfect(i)) {
        sum++;
    }
}
console.log(sum);

function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (n === sum) {
        return true;
    } else {
        return false;
    }
}

