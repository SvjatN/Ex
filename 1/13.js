
let a = 999;

  a = String(a).split("").reduce((sum,item) => sum += +item  ,0);

console.log(a);