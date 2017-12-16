let N = 15;
let arr = [];

for(let i=0;i<N;i++){

    let temp = Math.round((Math.random()*100));
    arr.push(temp);
    
}
console.log(N);
console.log(arr.join(" "));
console.log(arr.filter(item => item % 5 == 0  ).reduce( (sum, current) =>  sum + current , 0 ));

