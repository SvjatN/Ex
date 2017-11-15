let N = 10;
let arr = [];

for (let i = 0; i < N; i++) {
    let temp = Math.round(Math.random() * 10);
    arr.push(temp);
}
console.log(N);
console.log(arr);
console.log(arr.filter(item =>  item % 2 != 0  ).map( item  => Math.pow(item,2)).join(" ") );