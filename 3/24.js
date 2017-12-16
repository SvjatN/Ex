let max = - Infinity;
let arr = [3, 4, 6, 2, 7, 8, 9]; 

for(let i = 0 ;i<arr.length;i++){
    if( arr[i] > max ){
        max = arr[i];
    }
}
console.log(max);