let k = 7;
let n = 30;

let sum = 0;
for (let i = 0; i < n; i++) {
    if(i%k==0){
        sum +=i
    }
}

console.log(sum);