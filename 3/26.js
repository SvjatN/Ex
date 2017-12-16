let arr = [9, 4, 9, 6, 2, 7, 8, 9];
let max = - Infinity;

for(let i = 0 ;i<arr.length;i++){
    if( arr[i] > max ){
        max = arr[i];
    }
}

console.log(arr.indexOf(max) +1);
