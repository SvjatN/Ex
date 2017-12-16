let n = 65;
let amount = 0;

for (let i = 1; i < n; i++) {
    if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
        amount++;
    }
}
console.log(n);
console.log(amount);