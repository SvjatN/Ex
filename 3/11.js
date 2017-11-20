let n = 8128;
let sum = 0;

for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        sum += i;
    }
}
if (n == sum) {
    console.log("yes");
} else {
    console.log("no");
}
