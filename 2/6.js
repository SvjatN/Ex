
let a = 2;
let b = 8;
let c = 1;
let d = 10;

//let arr = [a, b, c, d];

let arr = [-90, 30, 1, 6,-7,90, 120, 110]

let min = Math.min(...arr);
console.log(min);
let max = Math.max(...arr);
console.log(max);





for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      } 
  }
}




