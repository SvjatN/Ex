let n = 30;

let temp = 0;
let i = 1;
let sum = 0;
let bool = true;

while (bool) {
    temp = Math.pow(i, 3) - 3 * i - 3;
    if (temp < n) {
        i = i + 1;
        temp = i;
        sum = sum + 1;
    } else {
        bool = false;
    }
}
console.log(n);
console.log(sum);
