let min = 1;
let max = 5;
let sum = 0;

for(let i = min;i<=max;i++){
   sum = sum + i;
}

let average =(sum/(max-(min-1)));
console.log(average.toFixed(2));
