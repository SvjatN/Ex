let n = 10;
let sum = 0;
let temp = 0;

label:
for(let i = 1;i < Math.sqrt(n) ;i++){
    temp = Math.pow(i,2);
    if(temp > n){
        break  label;
    }
    sum++;
}
console.log(n);
console.log(sum);