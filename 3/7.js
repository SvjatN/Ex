let N = 20;
let arr = [];

for (let i = 1; i <= N; i++) {
    if(N%i == 0){
        arr.push(i);
    }
}

console.log(N);
console.log(arr.join(" "));


