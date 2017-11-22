let n = 2;

let temp = 0;
let i = 0;
let sum = 0;
let bool = true;

while (bool) {
    temp = Math.pow(i, 2) - 2 * i - 1;
    if (temp < n) {
        i = i + 1;
        sum = sum + temp;
    } else {
        bool = false;
    }
}

console.log(sum);
