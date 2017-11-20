let min = 10;
let max = 13;
let sum = 0;
let sumPair =0;
for(let i = min;i<=max;i++){
    if(i%2 == 0){
     sum  += i;
     sumPair++;
    }
}

let average =(sum/sumPair);
console.log(average.toFixed(2));
