let N = 10;
let arr = [];
let countSecond = 0;

for (let i = 0; i < N; i++) {
    let temp = Math.round(Math.random() * 1000);
    arr.push(temp);
}

console.log(N);
console.log(arr.join(" "));
console.log(arr.filter((item) => item.toString().split('').pop() == 2).join(' '));