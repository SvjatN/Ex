let N = 50;
let arr = [];

for (let i = 0; i < N; i++) {
  arr.push(i);
}

console.log(N);
console.log(arr.filter((item) =>Math.sqrt(item) == Math.floor(Math.sqrt(item)))
  .filter((item) => item > 0)
  .join(" "));