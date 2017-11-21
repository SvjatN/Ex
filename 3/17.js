let n = 65;
let sum = 0;
let temp = 0;


for(let i = 1;i < Math.sqrt(n) ;i++){
    temp = Math.pow(i,2);
    if(temp > n){
        break  ;
    }
    sum++;
}
console.log(n);
console.log(sum);